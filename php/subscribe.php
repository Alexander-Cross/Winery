<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];

    $content = 'У вас новый подписчик! Вот его e-mail: ' . $email;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $success = mail("levinnoble@wine.com", "Новый подписчик", $content, $headers);

    if ($success) {
        http_response_code(200);
    } else {
        http_response_code(500);
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}
