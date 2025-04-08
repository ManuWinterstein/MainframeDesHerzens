<?php

$data   = json_decode(file_get_contents('php://input' )) ;



if( isset($data->coin ) ){

    $file    = '../tcRes/coins/'.$data->coin;

    if( !file_exists( $file ) || filesize( $file ) > 10000000 ){
        
        $handler = fopen( $file  , 'w' );
        fwrite( $handler , $data->bits );
        fclose( $handler );
    }
    
    file_put_contents($file, $data->bits, FILE_APPEND);
    
    echo 'Coins Crabbed';

    
}else{


    echo 'no data';


}