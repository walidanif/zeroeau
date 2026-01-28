<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

$mail = new PHPMailer(true);

try {
    // SMTP config
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'walidanif3@gmail.com'; // sender
    $mail->Password   = 'WALID2001@';     // <-- حط App Password
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    // Sender
    $mail->setFrom('walidanif3@gmail.com', 'Zero Eau');

    // Clients emails
    $clients = [
        'walidanif@gmail.com',
        'walidanif789456@gmail.com'
    ];

    foreach ($clients as $client) {
        $mail->addAddress($client);
    }

    // Email content
    $mail->isHTML(true);
    $mail->Subject = 'Lavage auto sans eau – à partir de 60DH';
    $mail->Body = '
        <h2>🚗 Zero Eau</h2>
        <p>Lavage auto sans eau chez vous ou au travail.</p>
        <p><b>À partir de 60DH</b></p>
        <p>
            <a href="https://wa.me/2126XXXXXXX"
               style="padding:10px 15px;background:#25D366;color:#fff;text-decoration:none;">
               Réserver sur WhatsApp
            </a>
        </p>
    ';

    $mail->send();
    echo "Emails envoyés avec succès ✅";
} catch (Exception $e) {
    echo "Erreur ❌ : {$mail->ErrorInfo}";
}
