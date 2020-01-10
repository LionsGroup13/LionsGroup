<?php

if(!empty($_POST['name']) and !empty($_POST['phone']) and !empty($_POST['mail'])
    and !empty($_POST['message'])){
    $name = trim(strip_tags($_POST['name']));
    $email = trim(strip_tags($_POST['email']));
    $message = trim(strip_tags($_POST['message']));

    mail('hello@lionsgroup.design', 'Письмо с lionsgroup.design',
        'Вам написал: '.$name.'<br />Его почта: '.$email.'<br />
      Его сообщение: '.$message,"Content-type:text/html;charset=windows-1251");
    exit;
}
else {
    exit;
}
?>
