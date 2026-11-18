<?php
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=UTF-8');

function respond($status, $payload) {
    http_response_code($status);
    echo json_encode($payload);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['success' => false, 'message' => 'Method not allowed']);
}

$input = json_decode(file_get_contents('php://input'), true);
if (!is_array($input)) {
    respond(400, ['success' => false, 'message' => 'Invalid form data']);
}

$email = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$fullName = trim($input['fullName'] ?? '');
$jobTitle = trim($input['jobTitle'] ?? '');
$phone = trim($input['phone'] ?? '');

if (!$email || $fullName === '' || $jobTitle === '') {
    respond(400, ['success' => false, 'message' => 'Please provide a valid work email, full name, and job title.']);
}

if (strlen($fullName) > 200 || strlen($jobTitle) > 200 || strlen($phone) > 40) {
    respond(400, ['success' => false, 'message' => 'One or more fields are too long.']);
}

$phpmailerFiles = ['Exception.php', 'PHPMailer.php', 'SMTP.php'];
$phpmailerCandidates = [
    dirname(__DIR__, 2) . '/PHPMailer',
    dirname(__DIR__) . '/PHPMailer',
    __DIR__ . '/PHPMailer',
];
$phpmailerDirectory = null;

foreach ($phpmailerCandidates as $candidate) {
    $allFilesExist = true;
    foreach ($phpmailerFiles as $file) {
        if (!is_file($candidate . '/' . $file)) {
            $allFilesExist = false;
            break;
        }
    }
    if ($allFilesExist) {
        $phpmailerDirectory = $candidate;
        break;
    }
}

if ($phpmailerDirectory === null) {
    error_log('Free trial email not sent: PHPMailer files were not found in the expected deployment locations.');
    respond(500, ['success' => false, 'message' => 'Email service is temporarily unavailable. Please try again later.']);
}

require_once $phpmailerDirectory . '/Exception.php';
require_once $phpmailerDirectory . '/PHPMailer.php';
require_once $phpmailerDirectory . '/SMTP.php';

$escape = function ($value) {
    return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
};
$safeName = $escape($fullName);
$safeEmail = $escape($email);
$safePhone = $phone === '' ? 'Not provided' : $escape($phone);
$safeJobTitle = $escape($jobTitle);
$subject = 'ProPlus Data free trial request';
$message = "<!doctype html><html><body>"
    . "<h2>New ProPlus Data free trial request</h2>"
    . "<p><strong>Work email:</strong> {$safeEmail}</p>"
    . "<p><strong>Full name:</strong> {$safeName}</p>"
    . "<p><strong>Phone:</strong> {$safePhone}</p>"
    . "<p><strong>Job title:</strong> {$safeJobTitle}</p>"
    . "<p>Submitted from the ProPlus Data homepage.</p>"
    . "</body></html>";

$smtpHost = getenv('SMTP_HOST');
$smtpUsername = getenv('SMTP_USERNAME');
$smtpPassword = getenv('SMTP_PASSWORD');
$smtpPort = (int) (getenv('SMTP_PORT') ?: 587);

if (!$smtpHost || !$smtpUsername || !$smtpPassword) {
    error_log('Free trial email not sent: SMTP_HOST, SMTP_USERNAME, or SMTP_PASSWORD is not configured.');
    respond(503, ['success' => false, 'message' => 'Email service is temporarily unavailable. Please try again later.']);
}

try {
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUsername;
    $mail->Password = $smtpPassword;
    $mail->Port = $smtpPort;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->CharSet = 'UTF-8';
    $mail->setFrom($smtpUsername, 'ProPlus Data');
    $mail->addAddress('info@proplusdata.co');
    $mail->addReplyTo($email, $fullName);
    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = $message;
    $mail->AltBody = "New ProPlus Data free trial request\n"
        . "Work email: {$email}\n"
        . "Full name: {$fullName}\n"
        . "Phone: " . ($phone === '' ? 'Not provided' : $phone) . "\n"
        . "Job title: {$jobTitle}";
    $mail->send();

    respond(200, ['success' => true, 'message' => 'Form submitted successfully']);
} catch (Throwable $error) {
    error_log('Free trial SMTP send failed: ' . $error->getMessage());
    respond(500, ['success' => false, 'message' => 'Email delivery failed. Please try again later.']);
}
