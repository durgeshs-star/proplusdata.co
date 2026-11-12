<?php
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

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: ProPlus Data <noreply@proplusdata.co>',
    'Reply-To: ' . $email,
];

if (mail('info@proplusdata.co', $subject, $message, implode("\r\n", $headers))) {
    respond(200, ['success' => true, 'message' => 'Form submitted successfully']);
}

respond(500, ['success' => false, 'message' => 'Email delivery failed. Please try again later.']);
