<?php

class Todo
{
    public $id; 
    public $title;
    public $category;
    public $description;

//--------------------- SETTERS -----------------------//    
    public function setId($new_id) {
        $this->id = $new_id;
    }
    public function setTitle($new_title) {
        $this->title = htmlspecialchars($new_title);
    }
    public function setCategory($new_category) {
        $this->category = htmlspecialchars($new_category);
    }
    public function setDescription($new_description) {
        $this->description = htmlspecialchars($new_description);
    }

//--------------------- GETTERS -----------------------//
    public function getId() {
        return $this->id;
    }
    public function getTitle() {
        return $this->title;
    }
    public function getCategory(){
        return $this->category;
    }
    public function getDescription(){
        return $this->description;
    }
}
?>