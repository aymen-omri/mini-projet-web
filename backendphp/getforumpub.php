<?php
require 'config.php' ; 


$sql = 'select * from forumpub' ; 

$query = $conn->query($sql) ;

$data = array() ; 

while($item = $query->fetch_assoc()){
    $data[] = $item ; 
}

$output = array() ;

if(count($data)>0){
    $output['msg'] = 'data here' ;
    $output['data'] = $data;
} else {
    $output['msg'] = 'data not here' ;
}

echo json_encode($output);



?>