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

        $sql = "SELECT users.name,users.img,posts.comment,posts.game_id,posts.id,user_id FROM posts INNER JOIN users ON users.id=posts.user_id WHERE game_id=:id AND Approve='1'";
        $path = explode('/', $_SERVER['REQUEST_URI']);


            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
      

        echo json_encode($blogs);
        break;

   


        
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO posts(id,user_id,game_id,comment,game_name) VALUES(null,:user_id,:game_id,:comment,:game_name)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':game_id', $user->game_id);
        $stmt->bindParam(':comment', $user->comment);
        $stmt->bindParam(':game_name', $user->game_name);




        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

      

        
 

            case "PUT":
                $user = json_decode( file_get_contents('php://input') );
                $sql = "UPDATE comments SET reply_comment=:reply_comment WHERE id=:comment_id";
                $stmt = $conn->prepare($sql);
             
                $stmt->bindParam(':comment_id', $user->comment_id);
                $stmt->bindParam(':reply_comment', $user->reply_comment);
              
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record updated successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to update record.'];
                }
                echo json_encode($response);
                break;
        
      
     
   
}