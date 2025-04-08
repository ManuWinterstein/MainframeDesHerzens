document.addEventListener("DOMContentLoaded", function() {

//------------------------------------------------------------helpers-------------------------------------------------------------------------------------



//------------------------------------------------------------defense/backHacks--------------------------------------------------------------------------- 

let file = 'Rt25-4-7-3'

let sBitsSum = 0

const maxSBitsJos   = 3
let sBitsJos        = 0
$( '#jos' ).on( 'mousedown', function(){
    
    triggerCount = 0
    
    trigger( 'mach doch einfach volle pulle' , true , true )

    sBitsJos += triggerCount * 29

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' Bits ÜberschuldungsBonus bei Angreifer'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsJos ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

}).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsJos , 'j')
    
    sBitsJos = 0

}) 
      


const maxSBitsHapo      = 3
let sBitsHapo           = 0
let sBitsHapoSum        = 0
$( '.hapo' ).on( 'click', function(){
    
    triggerCount = 0

    trigger( 'frackingmode', true , true )

    sBitsHapo += triggerCount * 12

    //console.log( 'hapo' )
    //sBitsHapoSum += readSpellsFromCoin( 'Rt25-4-7-3' )

    

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits ~> 4Fach CreditAufnahme'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsHapo ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( null , 80 )

}).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsHapo , 't')
    
    sBitsHapo = 0

}) 
      



const maxSBitsSte   = 3
let sBitsSte        = 0
$( '.ste' ).on( 'click mousedown', function(){

    triggerCount = 0
    
    trigger( 'again again again and again' , true , true )

    sBitsSte += triggerCount * 27

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsSte ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }   
}) 
                


let sBitsWh = 0 
$( '.white' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( ' i die  ' , true , true  )

    sBitsWh += triggerCount * 8

    $( '.sBitsLogger' ).html(  getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

})



const maxSBitsCla    = 3
let sBitsCla        = 0
$( '.cla' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'heil Matthias' , true , true  )

    sBitsCla += triggerCount * 13

    $( '.sBitsLogger' ).html(  getTime() + ' - ' + ( sBitsSum++ ) + ' Bits ©Lisel' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsCla ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }
    
}).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsCla , 'c')
    
    sBitsCla = 0

})



let sBitsKev = 0
$( '.kev' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'mongo and the mongodevil' , true , true  )

    sBitsKev += triggerCount * 24
                                        
    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

}).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsKev , 'k')
    
    sBitsKev = 0

})



let sBitsEvsa = 0
$( '.evsa' ).on( 'click mousedown', function(){
    
    sBitsEvsa += 8

    $( '.sBitsLogger' ).html( getTime( 't' ) + 'illma  ' + ' - ' + ( sBitsSum++ ) + ' KBits' )
    
})



let sBitsMahan = 0
$( '.mahan' ).on( 'click mousedown', function(){

    triggerCount = 0

    trigger( 'geschwindigkeit' , true , true  )

    sBitsMahan = triggerCount * 15

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )


}).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsMahan , 'm') 
    
    sBitsMahan = 0

})



$( '.mar' ).on( 'mousedown', function(){
    
    
   /*  readBitsFromCoin( file ).then( text =>{

        let data = text 
    
        let bits = data.length

        let map = {} 
        
        map[ 't' ] = 'hapo' 
        map[ 'm' ] = 'mahan' 
        map[ 'j' ] = 'jos' 
        map[ 'k' ] = 'kev' 
        map[ 'n' ] = 'noport' 
        //map[ 'c' ] = 'cla'
        

        for( let i = 0 ; i < data.length ; i++ ){

            triggerCount = 2

            if( map[ data[ i ] ] ){

                let selector = '.'+ map[ data[ i ] ]

                $( selector ).click()
                
            }

        }

        
        
    }) */
    

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + readSpellsFromCoin( file ) + ' KBits' )


})



let sBitsNoport = 0
$( '.noport' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'Rene Richter' , true , true  )

    sBitsNoport += triggerCount * 12

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits'  )
    
    }).on( 'mouseup' , function(){

    writeBitsToCoin( file , sBitsNoport , 'n')
    
    sBitsNoport = 0

    })

})