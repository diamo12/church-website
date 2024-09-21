<?php

$message = $_POST["name"];
$message .= ", ";
$message .= $_POST["email"];
$message .= ", ";
$message .= $_POST["message"];

mail("6thstreetgeneralbaptist@gmail.com","Contact Us Inquiry",$message,null);

header("Location: http://6thstreetgeneralbaptist.com");
die();
?>