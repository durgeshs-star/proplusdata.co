<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer files
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = "smtpout.secureserver.net";  // GoDaddy SMTP
    $mail->SMTPAuth = true;
    $mail->Username = "info@proplusdata.co";   // your email
    $mail->Password = "Info@2024";   // your password
    $mail->Port = 587;
    $mail->SMTPSecure = "tls";

    $mail->setFrom("info@proplusdata.co", "ProPlus Data");
    $mail->addAddress("info@proplusdata.co");

    $mail->isHTML(true);
    $mail->Subject = "New Form Submission";
    $mail->Body = "Name: " . $_POST['name'] . "<br>Email: " . $_POST['email'];

    $mail->send();
    echo "success";
} catch (Exception $e) {
    echo "Message could not be sent. Error: {$mail->ErrorInfo}";
}
?>
