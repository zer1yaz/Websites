<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru','phpmailer/language/');
    $mail->IsHTML(true);

    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $body = '<h1>Заявка оставленная клиентом</h1>';


    $mail->setFrom('spacious.for.me@gmail.com','fff');
    $mail->addAddress('i.zer1ya.i@gmail.com');
    $mail->Subject = 'ffffffff';

    $mail->Body = $body;
    $mail->send();

    $body = '<h1>Заявка оставленная клиентом</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

    if (!$mail->send()) {
        $message = 'Error';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>