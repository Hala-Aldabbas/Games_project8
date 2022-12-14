<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Origin", "*");
header("Access-Control-Allow-Credentials", "true");
header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "reactjs_project";

try {
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection

} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}


// $data = json_decode(file_get_contents("php://input"));



// if(isset($data->id) 
// && !empty(trim($data->id))
// ){
  
// $id = mysqli_real_escape_string($conn, trim());
$path = explode('/', $_SERVER['REQUEST_URI']);
$id=$path[3];
echo($id);

// $sql = "SELECT * FROM posts INNER JOIN users ON users.id=posts.user_id WHERE game_id=:id AND Approve='1'";
$allUsers = mysqli_query($conn,"SELECT * FROM posts INNER JOIN users ON users.id=posts.user_id WHERE game_id='$id' AND Approve='1'");


if(mysqli_num_rows($allUsers) > 0){
    while($row = mysqli_fetch_array($allUsers)){
        // $viewjson["id"] = $row['id'];
        $viewjson["game_id"] = $row['game_id'];
        $viewjson["comment"] = $row['comment'];
        $json_array["userdata"][] = $viewjson;

          }
    echo json_encode(["success"=>true,"userlist"=>$json_array]);
    return;
}
else{
    echo json_encode(["success"=>false]);
    return;
}
