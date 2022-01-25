<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $tourNumber = $_POST['tourNumber'];
    $time = $_POST['time'];
    $amount = $_POST['amount'];
    $name = $_POST['name'];
    $tourDate = $_POST['date'];
    $email = $_POST['email'];

    $content = 'Заказ на экскурсию №' . $tourNumber . '. Имя заказчика: ' . $name . '. E-mail заказчика: ' . $email . '. Желаемая дата: ' . $tourDate . 'Время: ' . $time . '. Количество человек: ' . $amount;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $success = mail("levinnoble@wine.com", "Заказ на экскурсию", $content, $headers);

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
