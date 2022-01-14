<?php
  $name = $_POST['name'];
  $tel = $_POST['tel'];
  $type = $_POST['type'];
  $brand = $_POST['brand'];
  $model = $_POST['model'];
  $service = $_POST['service'];
  $priceService = $_POST['priceService'];
  $desp = $_POST['desp'];
  $nodeJob = $_POST['nodeJob'];
  $nodeJob = "Лендинг";
  // mail("brobir.d@mail.ru",
  //   "Заявка с лендингов",
  //   "Эл. почта:  $mail \n
  //   Имя: $name \n
  //   Телефон: $tel \n
  //   Бренд: $brand \n
  //   Модель: $model \n
  //   Вид работы: $service \n
  //   Цена работы: $priceService");

  $ch = curl_init();
  if( $ch = curl_init() ) {
    curl_setopt($ch, CURLOPT_URL, "https://axmobycms.ru/JobIn.php");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, "mail=".$mail."&name=".$name."&nodeJob=".$nodeJob."&tel=".$tel."&type=".$type."&brand=".$brand."&model=".$model."&service=".$service."&priceService=".$priceService."&desp=".$desp."&istJob=".$nodeJob);
    $out = curl_exec($ch);
    echo $out;
    curl_close($ch);
  }
?>
