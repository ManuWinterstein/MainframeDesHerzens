document.addEventListener("DOMContentLoaded", function() {
//------------------------------------------------------------defense/backHacks--------------------------------------------------------------------------- 

let sBitsJos = 0
$( '#jos' ).on( 'mousedown', function(){
    
    triggerCount = 0
    
    trigger( 'mach doch einfach volle pulle' , true , true )

    sBitsJos += triggerCount * 29

    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsHapo + ' Bits ÜberschuldungsBonus bei Angreifer'  )

})

let sBitsHapo = 0
$( '.hapo' ).on( 'mousedown', function(){
    
    triggerCount = 0

    trigger( 'frackingmode' , true , true )

    sBitsHapo += triggerCount * 12 * 4

    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsHapo + ' Bits ~> 4Fach CreditAufnahme'  )

})

let sBitsSte = 0
$( '.ste' ).on( 'click mousedown', function(){

    triggerCount = 0
    
    trigger( 'again again again and again' , true , true )

    sBitsSte = triggerCount * 27

    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsSte + ' Bits' )

})
                
let sBitsWh = 0 
$( '.white' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( ' i die  ' , true , true  )

    sBitsWh += triggerCount * 8

    $( '.scrabbleBox' ).html(  new Date().getTime() + ' - ' + sBitsWh + ' Bits' )

})

let sBitsKev = 0
$( '.kev' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'mongo and the mongodevil' , true , true  )

    sBitsKev += triggerCount * 24

    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsKev + ' Bits' )

})

let sBitsEvsa
$( '.evsa' ).on( 'click mousedown', function(){
    
    sBitsEvsa += 8

    $( '.scrabbleBox' ).html( new Date().getTime() + 'illma  ' + ' - ' + sBitsKev + ' Bits' )
    

})

let sBitsMahan
$( '.mahan' ).on( 'click mousedown', function(){

    triggerCount = 0

    trigger( 'geschwindigkeit' , true , true  )

    sBitsMahan = triggerCount * 15

    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsMahan + ' Bits' )


})

$( '.mar' ).on( 'click mousedown', function(){
    
    $( '.scrabbleBox' ).html( new Date().getTime() )
    
    trigger( 'three slaves just listen to *' , true , true  )


})

let sBitsNoport = 0
$( '.noport' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( 'Rene Richter' , true , true  )

    sBitsNoport += triggerCount * 12


    $( '.scrabbleBox' ).html( new Date().getTime() + ' - ' + sBitsNoport + ' Bits'  )
    
    


})

})