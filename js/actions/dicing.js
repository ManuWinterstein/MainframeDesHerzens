
document.addEventListener("DOMContentLoaded", function() {
//---------------------------------------------------------throwDices------------------------------------------------------------------------------------------------------------

const throws            = 3
let throwCount          = throws

const emptyDicings      = []
let dicings             = emptyDicings    


$( '#throwDiceButton' ).click( function(){
           
    if ( $( '.valuesReady' ).ready()) {

        $( '#checkIntegrityValueContainer').html('')   

    }
                   
    let dT = diceSynced( 16 )

    dicings.indexOf( dT ) > 0  ?  dicings[ dicings.indexOf( dT ) ].push( dT ) : dicings.push( [ dT ] )
                      
}).on( 'click' , function(){

    $( '.scrabbleBox' ).html( new Date().getTime() )          
          
        if( throwCount > 0 ){

            throwCount--
            $(this).click()
                                            
        }else{

            let j = 1
    
            dicings.forEach( e => {
                     
                $( '#checkIntegrityValueContainer' ).append( e + ' ° ' + getType( 'lettersLowerCase' )[ diceSynced( 16 ) % 24 ] + getType( 'lettersLowerCase' )[ diceSynced( 16 ) % 24 ] 
                                                               + ' ~ '  + checkIntegrity( 12 ) + '%' + ( j % 6 == 0 ? '<br/>' : '  |   ' )) 

                j++
                    
            })                  
            
            
        $( '#checkIntegrityValueContainer' ).append( '<br/><div class="valuesReady">' + new Date().getTime() + '</div>' )
 
        throwCount = throws
 
        dicings = []
 
    }
})

//---------------------------------------------------------------TODO scrabAttacks---------------------------------------------------------------------------------------------------

$( '#getAttacks' ).on( 'click' , function(){

let scrabLetters = getType( 'scrabble' )

let susi = scrabLetters.length -1

let title       = scrabLetters[getRanInt( susi )] + scrabLetters[getRanInt( susi )]
let attacker    = scrabLetters[getRanInt( susi )] + scrabLetters[getRanInt( susi )] + scrabLetters[getRanInt( susi )]  + scrabLetters[getRanInt( susi )]

let html        = title + ' ' + attacker + '  x'

let victims      = ''

for( let i = 0 ; i < getRanInt(3) ; i++ ){

    victims      += ' ' + scrabLetters[getRanInt( susi )] + scrabLetters[getRanInt( susi )] + scrabLetters[getRanInt( susi )]  + scrabLetters[getRanInt( susi )] 

}

html            += victims

$( '#throwDiceButton' ).click()
$( '#checkIntegrityValueContainer' ).append(  html )


})

})