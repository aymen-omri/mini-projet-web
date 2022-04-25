<?php
session_start();
require_once 'config.php' ; 

$output = array() ; 


    $query = "select * from prog" ; 
    $results = $conn->query($query);
    $data = [] ; 
    while($item = $results->fetch_assoc()){
        $data[] = $item;
    }

    if(count($data)> 0){
        $output['msg']='data here' ;
        $output['data'] = $data ; 
         

    }else {
        $output['msg']= 'no data' ;
    }





echo json_encode($output);