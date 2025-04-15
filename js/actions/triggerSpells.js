document.addEventListener("DOMContentLoaded", function() {
/*------------------------------------------------------------ToDos---------------------------------------------------------------------------------------

verschaltbare coins synthie style

*///------------------------------------------------------------helpers-------------------------------------------------------------------------------------

const file = 'Rt25-4-9-postCock4'
const spells = getAllSpellCharacters()

let sBitsSum = 0

let isFile          = false
let isLooped        = false
let subSpellLevel   = 0

function callSubSpells( spell , coin , t ){

triggerCount = 0

$( 'onTrigger' ).removeClass( 'onTrigger jYellow jGreen jOrange jBlue jRed' )

colors = [ 'jYellow' , 'jGreen' , 'jOrange' , 'jBlue' , 'jRed' ]

    if( spell && spell.spell[ 0 ] != 'file' ){

        let color = colors[ getRanInt( 5 ) ] 
    
        setTimeout( () => { isFile = true; $( '.' + spell.id  ).click().removeClass( 'jYellow jGreen jOrange jBlue jRed' ).addClass(  'onTrigger ' +  color ) } , 10 )

    }else{

        subSpellLevel++

        if( subSpellLevel <= spell.level && spell.file[ spell.level - subSpellLevel ] != coin && t < getTime( 't' ) ){
        
            //setTimeout( readSpellsFromCoin( spell.file[ spell.level - subSpellLevel ] ) , 90 )

            

            callReadSpells( spell.file[ spell.level - subSpellLevel ] )
           
            
            
        }
    }  
}

function callReadSpells( file ){

    do{
    
        do{
            
            readSpellsFromCoin( file )

        }while( sBitsSum == undefined )
    
    }while( sBitsSum == undefined )  

}


function readSpellsFromCoin( coin ){

    readBitsFromCoin( coin ).then( text =>{

        let data = text 
    
        let bits = data.length
                
        for( let i = 0 ; i < data.length ; i++ ){

            triggerCount = 2

            if( spells[ data[ i ] ] ){

                    //console.log( spells[ data[ i ] ].file , coin )
                    callSubSpells( spells[ data[ i ] ] , coin , getTime( 't' ) )
                    sBitsSum++

            }

            if( i == data.length -1 ){

                isFile = false
                subSpellLevel = 0
                setTimeout( () => { $( '.onTrigger' ).removeClass( 'onTrigger jYellow jGreen jOrange jBlue jRed' ) }, 300 )
                if( isLooped &&  sBitsSum < 49 ){ //708621

                    sBitsSum = 0    
                    setTimeout( readSpellsFromCoin( coin ) , 80 )                      

                }
            }
        } 
    
    })
}
//---------------------------------------------------------------Loop----------------------------------------------------------------------------------

$( '#checkSpellLoop' ).on( 'change' , function(){

    isLooped = !isLooped

})

//------------------------------------------------------------defense/backHacks--------------------------------------------------------------------------- 

const maxSBitsJos   = 3
let sBitsJos        = 0
$( '#jos' ).on( 'click', function(){
    
    triggerCount = 0
    
    trigger( spells[ 'j' ].spell[0] , true , true )

    sBitsJos += triggerCount * 29

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' Bits ÜberschuldungsBonus bei Angreifer'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsJos ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( null , 80 )

}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsJos , 'j')
    
    sBitsJos = 0

}) 
      


const maxSBitsHapo      = 3
let sBitsHapo           = 0
$( '.hapo' ).on( 'click', function(){
    
    triggerCount = 0

    trigger( spells[ 't' ].spell[0] , true , true )

    sBitsHapo += triggerCount * 12

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits ~> 4Fach CreditAufnahme'  )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsHapo ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( null , 80 )

}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsHapo , 't')
    
    sBitsHapo = 0

}) 
      


const maxSBitsSte   = 3
let sBitsSte        = 0
$( '.ste' ).on( 'click mousedown', function(){

    triggerCount = 0
    
    trigger( spells[ 's' ].spell[0] , true , true )

    sBitsSte += triggerCount * 27

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsSte ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }   

    setTimeout( null , 80 )

}) 
                


let sBitsWh = 0 
$( '.white' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( spells[ 'a' ].spell[0] , true , true )

    sBitsWh += triggerCount * 8

    $( '.sBitsLogger' ).html(  getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

})



const maxSBitsCla    = 3
let sBitsCla        = 0
$( '.cla' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( spells[ 'c' ].spell[0] , true , true )

    sBitsCla += triggerCount * 13

    $( '.sBitsLogger' ).html(  getTime() + ' - ' + ( sBitsSum++ ) + ' Bits ©Lisel' )

}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitsCla ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( null , 80 )
    
}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsCla , 'c')
    
    sBitsCla = 0

})


let sBitsKev = 0
$( '.kev' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( spells[ 'k' ].spell[0] , true , true )

    sBitsKev += triggerCount * 24
                                        
    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )

}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsKev , 'k')
    
    sBitsKev = 0

})


let sBitsEvsa = 0
$( '.evsa' ).on( 'click mousedown', function(){
    
    sBitsEvsa += 8

    let s = spells[ 'e' ]

    callReadSpells( s.file[ s.level ] )

    $( '.sBitsLogger' ).html( getTime( 't' ) + 'illma  ' + ' - ' + ( sBitsSum++ ) + ' KBits' )
    
}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsEvsa , 'e')
    
    sBitsEvsa = 0

    $( '.onTrigger' ).removeClass( 'onTrigger' )

})


let sBitsBeat       = 0
$( '.beat' ).on( 'click mousedown', function(){
    
    sBitsBeat += 8

    let s = spells[ 'b' ]

    callReadSpells( s.file[ s.level ] )

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' illma  ' + ' - ' + ( sBitsSum++ ) + ' MBits' )
    
}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsBeat , 'b')
    
    sBitsBeat = 0

}) 


let sBitsNik        = 0
$( '.nik' ).on( 'click mousedown', function(){
    
    sBitsNik += 8

    callReadSpells( 'Rt25-4-7-3' )

    $( '.sBitsLogger' ).html( getTime( 't' ) + 'illma  ' + ' - ' + ( sBitsSum++ ) + ' KBits' )
    
}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsNik , 'i')
    
    sBitsNik = 0

}) 


let sBitsMahan = 0
$( '.mahan' ).on( 'click mousedown', function(){

    triggerCount = 0

    trigger( spells[ 'm' ].spell[0] , true , true )

    sBitsMahan = triggerCount * 15

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )


}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsMahan , 'm') 
    
    sBitsMahan = 0

})

const maxSBitMax    = 3
let sBitsMax        = 0
$( '.max' ).on( 'click mousedown', function(){

    triggerCount = 0

    trigger( spells[ 'x' ].spell[0] , true , true )

    sBitsMahan = triggerCount * 15

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits' )


}).on( 'click' , function(){ 

    for( let i = 0 ; i < maxSBitMax ; i ++ ){

        if( triggerCount < 1)
            $(this).click()
        
    }

    setTimeout( null , 80 )
    
}).on( 'mouseup' , function(){

    if( !isFile )
    writeBitsToCoin( file , sBitsMax , 'x') 
    
    sBitsMax = 0

})



$( '.mar' ).on( 'mousedown', function(){

    sBitsBeat += 8
    
    let s = spells[ 'i' ]
        
    callReadSpells( s.file[ s.level - subSpellLevel ] )
        
    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + readSpellsFromCoin( file ) + ' KBits' )

})



let sBitsNoport = 0
$( '.noport' ).on( 'click mousedown', function(){
    
    triggerCount = 0

    trigger( spells[ 'n' ].spell[0] , true , true )

    sBitsNoport += triggerCount * 12

    $( '.sBitsLogger' ).html( getTime( 't' ) + ' - ' + ( sBitsSum++ ) + ' KBits'  )
    
    }).on( 'mouseup' , function(){

        if( !isFile )    
        writeBitsToCoin( file , sBitsNoport , 'n')
    
        sBitsNoport = 0

    })

})