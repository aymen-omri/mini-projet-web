<?php
include_once("config.php");
$postdata=file_get_contents("php://input");
if (isset($postdata)&& !empty($postdata)){
    $request = json_decode($postdata);
    $iduser=trim($request->iduser);
    $name=trim($request->name);
    $content=trim($request->content);


    
    $sql="INSERT INTO forumpub(
        name,
        content,
        iduser
        
        ) VALUES ('$name','$content','$iduser')";
        if($conn->query($sql)) {
            $data=array('message'=>'success');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data); 
        }

}
?>