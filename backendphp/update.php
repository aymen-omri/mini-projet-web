<?php
header("Content-Type: application/json");
include_once("config.php");
$postdata=file_get_contents("php://input");
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $id=trim($request->id);
    $name=trim($request->name);
    $email=mysqli_real_escape_string($conn,trim($request->email));
    $password=mysqli_real_escape_string($conn,trim($request->password));


    if($email =='' || $name == '' || $password == ''){
        $data=array('message'=>'something wrong !!');
        echo json_encode($data);
    } 
    else {
 
    $query = "update users set  name='$name', email='$email', password='$password' WHERE id='$id';";
    $sql = $conn->query($query);

        if($sql) {
            $data=array('message'=>'updated successfully');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }

   }
}
?>


