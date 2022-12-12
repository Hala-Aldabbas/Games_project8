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

        $sql = "SELECT comments.id,users.img,users.name,comments.reply_comment,comments.game_id,comments.post_id,comments.user_id FROM comments INNER JOIN users ON users.id=comments.user_id WHERE game_id=:id ";
        $path = explode('/', $_SERVER['REQUEST_URI']);


            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $blogs = $stmt->fetchAll(PDO::FETCH_ASSOC);
      

        echo json_encode($blogs);
        break;

   


        
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO comments(id,user_id,game_id,reply_comment,post_id) VALUES(null,:user_id,:game_id,:reply_comment,:post_id)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':game_id', $user->game_id);
        $stmt->bindParam(':reply_comment', $user->reply_comment);
        $stmt->bindParam(':post_id', $user->post_id);




        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

      

           
        case "DELETE":
            $sql = "DELETE FROM comments WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
    
            if ($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
    


            

   
}