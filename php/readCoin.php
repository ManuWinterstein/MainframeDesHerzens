<?php

$data   = json_decode(file_get_contents('php://input' )) ;

if( isset($data->coin ) ){

    $file    = '../tcRes/coins/'.$data->coin;

    echo file_get_contents( $file );

}else{

    echo 'no data';


}