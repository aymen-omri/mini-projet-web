<?php
include_once("config.php");
$postdata=file_get_contents("php://input");
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $name=trim($request->name);
    $email=mysqli_real_escape_string($conn,trim($request->email));
    $password=mysqli_real_escape_string($conn,trim($request->password));

    $minl = 8 ; 

    $fsql="select * from users where email='$email'" ; 
    $fquery = $conn->query($fsql) ; 

    $tab = array() ;
    while($item = $fquery->fetch_assoc()){
        $tab[]=$item ;
    }

    if(count($tab)){
        $data = array('message' =>'this email exists please change it !!');
        echo json_encode($data);

    } 
    else if(strlen($password)<$minl) {
        $data = array('message' =>'password length should be 8 or higher!!');
        echo json_encode($data);

    } 
    else {
 
    $sql="INSERT INTO users(
        name,
        email,
        password
        
        ) VALUES ('$name','$email','$password')";
        if($conn->query($sql)) {
            $data=array('message'=>'success');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }

}
}

?>
