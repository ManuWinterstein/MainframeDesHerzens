document.addEventListener("DOMContentLoaded", function() {

//------------------------------------------------------------helpers-------------------------------------------------------------------------------------



//------------------------------------------------------------defense/backHacks--------------------------------------------------------------------------- 

const maxSBitsJos   = 3
let sBitsJos        = 0
$( '#jos' ).on( 'mousedown', function(){
    
    triggerCount = 0
    
    trigger( 'mach doch einfach volle pulle' , true , true )

    sBitsJos += triggerCount * 29

    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsHapo + ' Bits ÜberschuldungsBonus bei Angreifer'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsJos ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( () => { $( this ).prop( 'data-disabled' , true ) } , 3000 )
    $( this ).prop( 'data-disabled' , false )

  }).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsJos , 'j') )
    sBitsCla = 0

  }) 
      
const maxSBitsHapo      = 3
let sBitsHapo           = 0
$( '.hapo' ).on( 'mousedown', function(){
    
    triggerCount = 0

    trigger( 'frackingmode' , true , true )

    sBitsHapo += triggerCount * 12 * 4

    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsHapo + ' Bits ~> 4Fach CreditAufnahme'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsHapo ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( () => { $( this ).prop( 'data-disabled' , true ) } , 3000 )
    $( this ).prop( 'data-disabled' , false )

  }).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsHapo , 't') )
    sBitsCla = 0

  }) 
      

const maxSBitsSte   = 3
let sBitsSte        = 0
$( '.ste' ).on( 'click mousedown', function(){

    triggerCount = 0
    
    trigger( 'again again again and again' , true , true )

    sBitsSte += triggerCount * 27

    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsSte + ' Bits' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsSte ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( () => { $( this ).prop( 'data-disabled' , true ) } , 3000 )
    $( this ).prop( 'data-disabled' , false )

  }) 
                
let sBitsWh = 0 
$( '.white' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( ' i die  ' , true , true  )

    sBitsWh += triggerCount * 8

    $( '.sBitsLogger' ).html(  new Date().getTime() + ' - ' + sBitsWh + ' Bits' )

})
const maxSBitsCla    = 3
let sBitsCla        = 0
$( '.cla' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'heil Matthias' , true , true  )

    sBitsCla += triggerCount * 13

    $( '.sBitsLogger' ).html(  new Date().getTime() + ' - ' + sBitsCla + ' Bits ©Lisel' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsCla ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }
    setTimeout( () => { $( this ).prop( 'data-disabled' , true ) } , 3000 )
    $( this ).prop( 'data-disabled' , false )

  }).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsCla , 'c') )
    sBitsCla = 0

  })
let sBitsKev = 0
$( '.kev' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'mongo and the mongodevil' , true , true  )

    sBitsKev += triggerCount * 24

    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsKev + ' Bits' )

}).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsKev , 'k') )
    sBitsCla = 0

  })

let sBitsEvsa = 0
$( '.evsa' ).on( 'click mousedown', function(){
    
    sBitsEvsa += 8

    $( '.sBitsLogger' ).html( new Date().getTime() + 'illma  ' + ' - ' + sBitsKev + ' Bits' )
    

})

let sBitsMahan = 0
$( '.mahan' ).on( 'click mousedown', function(){

    triggerCount = 0

    trigger( 'geschwindigkeit' , true , true  )

    sBitsMahan = triggerCount * 15

    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsMahan + ' Bits' )


}).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsMahan , 'm') )
    sBitsCla = 0

  })

$( '.mar' ).on( 'click mousedown', function(){
    
    $( '.sBitsLogger' ).html( new Date().getTime() )
    
    trigger( 'three slaves just listen to *' , true , true  )


})

let sBitsNoport = 0
$( '.noport' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'Rene Richter' , true , true  )

    sBitsNoport += triggerCount * 12


    $( '.sBitsLogger' ).html( new Date().getTime() + ' - ' + sBitsNoport + ' Bits'  )
    
    


}).on( 'mouseup' , function(){

    console.log( writeBitsToCoin( 'postMatti' , sBitsNoport , 'n') )
    sBitsCla = 0

  })

})