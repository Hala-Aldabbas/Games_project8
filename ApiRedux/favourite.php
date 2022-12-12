<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {

    case "GET":

        $sql = "SELECT * FROM favourite WHERE user_id=:id";
        $path = explode('/', $_SERVER['REQUEST_URI']);


            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
      

        echo json_encode($blogs);
        break;



        
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO favourite(id,game_id,user_id,game_img,game_name) VALUES(null,:game_id,:user_id,:game_img,:game_name)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':game_id', $user->game_id);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':game_img', $user->game_img);
        $stmt->bindParam(':game_name', $user->game_name);



        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

      
   
   
}