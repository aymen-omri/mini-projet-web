<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");


$conn = mysqli_connect("localhost","root","","mabase");
if(mysqli_connect_errno()){
    die("failed to connect to mysql" . mysqli_connect_errno());
}