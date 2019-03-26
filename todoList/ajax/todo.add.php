<?php
  require_once '../config.php';
  require_once '../todo.php';
?>

<?php

  $todo = new Todo();

  (! empty($_POST['title']))       ? $todo->setTitle($_POST['title'])             : 'erreur';
  (! empty($_POST['category']))    ? $todo->setCategory($_POST['category'])       : 'erreur';
  (! empty($_POST['description'])) ? $todo->setDescription($_POST['description']) : 'erreur';

  $title       = $todo->getTitle();
  $category    = $todo->getCategory();
  $description = $todo->getDescription();

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
      INSERT INTO
          todos
          (
              title,
              category,
              description
          )
      VALUES
          (
              :title,
              :category,
              :description
          )
  ';

  $req = $pdo->prepare($query);
  $req->bindParam(':title', $title);
  $req->bindParam(':category', $category);
  $req->bindParam(':description', $description);
  $req->execute();

  $lastId = $pdo->lastInsertId();
  $todo->setId($lastId);

  echo json_encode($todo);