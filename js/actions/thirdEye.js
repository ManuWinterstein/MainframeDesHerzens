document.addEventListener("DOMContentLoaded", function() {
//---------------------------------------------------------------mindReading----------------------------------------------------------------------------
        
$( '#catHubLogo' ).click( function(){
                
     $( '.scrabbleBox' ).val( 'noizeReductionTreshhold' )
     
     $( '.scrabbleBox' ).val( scrabTheWord() )

 })

 //-----------------------------------------------------------glasBallStuff------------------------------------------------------------------------------

 const dpi      = 4
 let imageInc   = dpi

 $( '#getViewRGBButton' ).click( function (){

    let m = 10

    let cloneCanvas = []

    
    $('.canvasBox').children().remove()
    
       
    $( '.canvasBox' ).append(

    `<div class="canvasLayer">
        <canvas 
            class   ="visualisizeCanvas"
            id      ="visualisizeValues1_0" 
           style   ="    
                height      : 300px;
                position    : relative;
                left        : 110px;
                ">
        </canvas>
    </div>
    `
    )

    let colorCanvas1 = document.getElementById("visualisizeValues1_0");          
    let cctx1 = colorCanvas1.getContext("2d");     

    

                
    let tn = getCharacter( 'didder' )           

    let cctx2

    for( let i = 1 ; i < dpi + 1 ; i++){
        
            let t = new Date().getMilliseconds()    
            
            cctx1 =      getViewRGB( 200, 200, cctx1 )
                setTimeout( null , m )

            if(imageInc > 0 ){    
                
                    $( '.canvasBox' ).append(

                    `
                    <div class="canvasLayer on">
                            <canvas 
                                class   ="visualisizeCanvas"
                                id      ="visualisizeValues1_` + i + `" 
                                style   ="    
                                    height      : 300px;
                                    position    : relative;
                                    left        : 11` + i + `px;
                                    top         : `+ i + `px
                                    ">
                            </canvas>
                        </div>   
                    </div>
                    `
                    )

                }
                
                let colorCanvas2 = document.getElementById("visualisizeValues1_" + i );
                cctx2 = colorCanvas2.getContext("2d");

                cctx2.drawImage( colorCanvas1 , 0 , 0 )
                
                imageInc--
    
                if( $( '.caanvasLayer' ).length > 1 + i )
                    $( '.canvasLayer' )[i].remove()

                if( t % 140 < 140 ){

                    //console.log('60Hz')
                    imageInc = dpi
                    $( '.canvasClones' ).remove()
                    imageInc = dpi
                    $( 'integrityBetButton' ).click()

                }

        }    
    
    
    $( colorCanvas1 ).ready( function(){
        $( '#integrityBetButton' ).click()
    
    })
})

$( '#getViewArtButton' ).click( function (){

    let m = 10

    let cloneCanvas = []

    
    $('.canvasBox').children().remove()
    
       
    $( '.canvasBox' ).append(

    `<div class="canvasLayer">
        <canvas 
            class   ="visualisizeCanvas"
            id      ="visualisizeValues1_0" 
           style   ="    
                height      : 300px;
                position    : relative;
                left        : 110px;
                ">
        </canvas>
    </div>
    `
    )

    let colorCanvas1 = document.getElementById("visualisizeValues1_0");          
    let cctx1 = colorCanvas1.getContext("2d");     

    

                
    let tn = getCharacter( 'didder' )           

    let cctx2

    for( let i = 1 ; i < dpi + 1 ; i++){
        
            let t = new Date().getMilliseconds()    
            
            cctx1 =      getViewDiced( 200, 200, cctx1 , 16 )
                setTimeout( null , m )

            if(imageInc > 0 ){    
                
                    $( '.canvasBox' ).append(

                    `
                    <div class="canvasLayer on">
                            <canvas 
                                class   ="visualisizeCanvas"
                                id      ="visualisizeValues1_` + i + `" 
                                style   ="    
                                    height      : 300px;
                                    position    : relative;
                                    left        : 11` + i + `px;
                                    top         : `+ i + `px
                                    ">
                            </canvas>
                        </div>   
                    </div>
                    `
                    )

                }
                
                let colorCanvas2 = document.getElementById("visualisizeValues1_" + i );
                cctx2 = colorCanvas2.getContext("2d");

                cctx2.drawImage( colorCanvas1 , 0 , 0 )
                
                imageInc--
    
                if( t % 140 < 140 ){

                    imageInc = dpi
                    $( '.canvasClones' ).remove()
                    imageInc = dpi
                    $( 'integrityBetButton' ).click()

                }

        }    
    
    
    $( colorCanvas1 ).ready( function(){
        $( '#integrityBetButton' ).click()
    
    })
})

const pci = 32
let checks = pci
let metaIntegrity = 0

$( '#integrityBetButton' ).click( function(){

    $( '.scrabbleBox' ).html( new Date().getTime() )

    let integrity = checkIntegrity( 12 )

      

    //console.log(integrity)

    $( '#checkIntegrityValueContainer' ).html( integrity + '%' )

    if( integrity > 40 )
        metaIntegrity = integrity


}).on( 'click' , function( ){  

        $( '#checkIntegrityValueContainer' ).ready( function(){
        
            if( checks > 0 ){
  
                try{
     
                    if( metaIntegrity > 80 ){


         
                        setTimeout( null , 10 )

                        $( '.scrabbleBox' ).html( new Date().getTime() + 'again again again and again' )                    
                        $( '#getViewRGBButton' ).click()

                        
         
                    }
                    
                    checks--    
                    $( '#integrityBetButton' ).click()
                
                }catch{

                    setTimeout( null , 10 )
                    $( '#getViewRGBButton' ).click()

                }
            }

            if( checks == 0 ) 
                checks = pci
        })
    })

//---------------------------------------------------------------------------------askGodAndTheRest------------------------------------------------------------------------

$( '#getValueButton' ).click( function (){

    let c           = 12
    let a           = 0
    let god         = 0
    let b           = 0
    let i,j         = 0
    let ü0          =  Math.floor( Math.random() * 12 ) + 2
    let acht        =  Math.floor( Math.random() * 12 ) + 2
    let ü0God       =  Math.floor( Math.random() * 12 ) + 2
    let achtGod     =  Math.floor( Math.random() * 12 ) + 2
    let aLast,godLast

    

    while( b < 6 ){
        
        c       = 12
        j       = 0
        a       = 0
        god     = 0     
        
        let jGArr       = []
        let cGArr       = [] 
        let jArr        = []
        let cArr        = []

        while( j != ü0 ){
        
            while( c == 12 ) {
        
                c = Math.floor( Math.random() * 12 ) + 2

                if( cArr.length < 1024){
                    
                    cArr.push( c )
                    
                }else{

                    cArr = []
        	
               }
                    
                a += c
                   
                i++
                
            }
                
            c = 12
                
            j = Math.floor( Math.random() * 12 ) + 1
                
            if( jArr.length < 1024){

                jArr.push( j )

            }else{
           
                jArr = []
                    
            }
                               
        }
        
        
    $('#valueOfFooBottomLeft').val( ü0 )
    $('#valueOfFooBottomRight').val( '- '+ acht )
    $('#valueOfFoo').val( a )
    $( '#divisionOfFooWorld' ).html( a / Number( acht + '.' + ü0 ) )
    

    c = 12
    j = 0
  
    while( j != ü0 ){
        
        while( c == 12 ) {
        
            c = Math.floor( Math.random() * 12 ) + 2
                
            cGArr.push( c )
               
            if( cGArr.length < 1024){
                    
                cGArr.push( c )
                
            }else{

                cGArr = []

            }
              
            god += c
                
            i++
           
        }

        c = 12
        j = Math.floor( Math.random() * 12 ) + 2
            
        if( jGArr.length < 1024){
                
            jGArr.push( j )
        
        }else{

            jGArr = []
        
        }
            
    }
        
        
    $('#valueOfFooBottomLeftGod').val( ü0God )
    $('#valueOfFooBottomRightGod').val( '- '+ achtGod )
    $('#valueOfFooGod').val( god )
    $( '#divisionOfFooGod' ).html( god / Number( achtGod + '.' + ü0God ) )
    

    if( aLast == a && godLast == god){
        
        b++

        cArr    = []
        jArr    = []
        cGArr   = []
        jGArr   = []

    }

    godLast = god
    aLast = a 

}

})
})