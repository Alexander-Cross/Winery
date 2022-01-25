<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['tel'];
    $email = $_POST['email'];
    $orders = $_POST['orders'];
    $ordersLength = count($orders);
    $ordersString = '';
    for ($i = 0; $i < $ordersLength; $i++) {
        $ordersString .= $orders[$i]->shortName . ' в количестве: ' . $orders[$i]->amount . ' шт. ';
    }

    $content = 'Новый заказ от' . $name . '. Его телефон: ' . $phone . '. Его e-mail: ' . $email . '. Он заказал: ' . $ordersString;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $success = mail("levinnoble@wine.com", "Новый заказ вина", $content, $headers);

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
