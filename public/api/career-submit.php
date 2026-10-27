<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit();
}

try {
    // Validate required fields
    $required_fields = ['fullName', 'email', 'phone', 'position'];
    foreach ($required_fields as $field) {
        if (empty($_POST[$field])) {
            throw new Exception("Field '$field' is required");
        }
    }

    // Sanitize inputs
    $fullName = htmlspecialchars(strip_tags(trim($_POST['fullName'])));
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars(strip_tags(trim($_POST['phone'])));
    $position = htmlspecialchars(strip_tags(trim($_POST['position'])));
    $experience = isset($_POST['experience']) ? htmlspecialchars(strip_tags(trim($_POST['experience']))) : '';
    $coverLetter = isset($_POST['coverLetter']) ? htmlspecialchars(strip_tags(trim($_POST['coverLetter']))) : '';

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new Exception('Invalid email address');
    }

    // Handle file upload
    $resumePath = '';
    if (isset($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
        $file = $_FILES['resume'];

        // Validate file type
        $allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file['tmp_name']);
        finfo_close($finfo);

        if (!in_array($mimeType, $allowedTypes)) {
            throw new Exception('Invalid file type. Only PDF and Word documents are allowed.');
        }

        // Validate file size (max 5MB)
        if ($file['size'] > 5 * 1024 * 1024) {
            throw new Exception('File size exceeds 5MB limit');
        }

        // Generate unique filename
        $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
        $uniqueName = uniqid('resume_', true) . '.' . $extension;
        $uploadDir = __DIR__ . '/../uploads/resumes/';

        // Create upload directory if it doesn't exist
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        $resumePath = $uploadDir . $uniqueName;

        if (!move_uploaded_file($file['tmp_name'], $resumePath)) {
            throw new Exception('Failed to upload file');
        }

        $resumePath = 'uploads/resumes/' . $uniqueName;
    }

    // Store submission in database or send email
    // For now, we'll send an email notification
    $to = 'careers@proplusdata.co';
    $subject = 'New Career Application: ' . $position;

    $message = "
    <html>
    <head>
        <title>New Career Application</title>
    </head>
    <body>
        <h2>Career Application Details</h2>
        <p><strong>Position:</strong> $position</p>
        <p><strong>Full Name:</strong> $fullName</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Experience:</strong> $experience</p>
        <p><strong>Cover Letter:</strong></p>
        <p>$coverLetter</p>
        <p><strong>Resume:</strong> $resumePath</p>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: careers@proplusdata.co\r\n";

    // Send email
    if (!mail($to, $subject, $message, $headers)) {
        // Email failed, but still log the submission
        error_log('Failed to send career application email');
    }

    // You can also store in a database here
    // Example: Insert into MySQL database

    echo json_encode([
        'success' => true,
        'message' => 'Application submitted successfully'
    ]);

} catch (Exception $e) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $e->getMessage()
    ]);
}
?>
