<?php
  require_once '../config.php';
  require_once '../todo.php';
?>

<?php

  $id = (! empty($_POST['id'])) ? $_POST['id'] : 0;

  $pdo = new PDO
  (
    DBH,
    USER,
    PASSWORD,
    [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]
  );

  $query =
  '
      DELETE
      FROM
          todos
      WHERE
          id = :id
  ';

  $req = $pdo->prepare($query);
  $req->bindParam(':id', $id);
  $req->execute();
