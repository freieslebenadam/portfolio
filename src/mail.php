<?php

$data = json_decode(file_get_contents("php://input"), true);

$name = $data['firstName'] . " " . $data['lastName'];
$email = $data['email'];
$msg = wordwrap($data["text"],70);
$headers = "From: " . $email;

if (@mail("66imafaka66@gmail.com", "Mail from web: " . $name, $msg, $headers)) {
    echo "Success";
} else {
    echo "Fail";
}
