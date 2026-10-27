<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON input
$input = json_decode(file_get_contents('php://input'), true);

if (!$input) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit();
}

// Validate required fields
$required_fields = ['email', 'fullName', 'phone', 'jobTitle'];
foreach ($required_fields as $field) {
    if (empty($input[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'All fields are required']);
        exit();
    }
}

// Validate company email (not gmail, yahoo, etc.)
$email = filter_var($input['email'], FILTER_SANITIZE_EMAIL);
$forbidden_domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'aol.com', 'icloud.com', 'mail.com', 'protonmail.com', 'zoho.com', 'yandex.com'];
$email_domain = strtolower(explode('@', $email)[1]);

if (in_array($email_domain, $forbidden_domains)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please use a company email address']);
    exit();
}

// Email configuration
$to = 'info@proplusdata.co';
$subject = 'Nexora Free Trial Request - ' . $input['fullName'];

// Email body
$message = "
<html>
<head>
    <title>Nexora Free Trial Request</title>
</head>
<body>
    <h2>New Nexora Free Trial Request</h2>
    <p><strong>Email:</strong> {$input['email']}</p>
    <p><strong>Full Name:</strong> {$input['fullName']}</p>
    <p><strong>Phone:</strong> {$input['phone']}</p>
    <p><strong>Job Title:</strong> {$input['jobTitle']}</p>
    <hr>
    <p><em>This request was submitted from the ProPlus Data homepage.</em></p>
</body>
</html>
";

// Headers
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type: text/html; charset=UTF-8" . "\r\n";
$headers .= "From: ProPlus Data <noreply@proplusdata.co>" . "\r\n";
$headers .= "Reply-To: {$input['email]}" . "\r\n";

// Send email
if (mail($to, $subject, $message, $headers)) {
    echo json_encode(['success' => true, 'message' => 'Form submitted successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email']);
}
?>
