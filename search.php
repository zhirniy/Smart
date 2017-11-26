<?php

$field1 = $_POST['field1'];
$operator1 = $_POST['operator1'];
$number1 = $_POST['number1'];
$field2 = $_POST['field2'];
$operator2 = $_POST['operator2'];
$number2 = $_POST['number2'];
// массив для переменных, которые будут переданы с запросом
$paramsArray = array(
    'a' => '5', 
    'b' => '10'
); 
 // преобразуем массив в URL-кодированную строку
$vars = http_build_query($paramsArray);
// создаем параметры контекста
$options = array(
    'http' => array(  
                'method'  => 'POST',  // метод передачи данных
                'header'  => 'Content-type: application/x-www-form-urlencoded',  // заголовок 
                'content' => $vars,  // переменные
            )  
);  
$context  = stream_context_create($options);  // создаём контекст потока
$result = file_get_contents('http://localhost/Smart/test.php', false, $context); //отправляем запрос
var_dump($result); // вывод результата

  ?>
