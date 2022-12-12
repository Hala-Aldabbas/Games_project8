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
        
        $sql = "SELECT game_name , users.name , posts.comment
        FROM users
        INNER JOIN posts
        ON posts.user_id =users.id;";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $users = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($users);
        break;


        
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "INSERT INTO `users`(`id`, `name`, `role`, `email`, `pass`, `created_at`,  `location`, `mobile`) VALUES(null, :name, :role,:email, :pass, :created_at , :location , :mobile)";
        $stmt = $conn->prepare($sql);
        $created_at = date('Y-m-d');
        $stmt->bindParam(':name', $user->name);
        $stmt->bindParam(':role', $user->role);
        $stmt->bindParam(':email', $user->email);
        $stmt->bindParam(':pass', $user->pass);
        $stmt->bindParam(':location', $user->location);
        $stmt->bindParam(':mobile', $user->mobile);

  
        $stmt->bindParam(':created_at', $created_at);

        if($stmt->execute()) {
            $response = ['status' => 1, 'message' => 'Record created successfully.'];
        } else {
            $response = ['status' => 0, 'message' => 'Failed to create record.'];
        }
        echo json_encode($response);
        break;

        case "PUT":
            $user = json_decode( file_get_contents('php://input') );
            $sql = "UPDATE `users` SET `name`=:name ,`role`=role,`email`=email,`pass`=pass,`location`=location,`mobile`=mobile WHERE id = :id ";
         
            $stmt = $conn->prepare($sql);
         
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':role', $user->role);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':pass', $user->pass);
            $stmt->bindParam(':location', $user->location);
            $stmt->bindParam(':mobile', $user->mobile);
    
      
        
  
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
            break;

            
        case "DELETE":
            $sql = "DELETE FROM posts WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
    
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
    
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
            break;
   
}