
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRanInt(godI){

    return Math.floor( Math.random() * godI )

}

//-------------------------------------------------------------------------getColorBlock------------------------------------

const letters = '0123456789abcdef';

let color ='#'

function getColor(){  
    
    for(let b = 0; b < 3; b++){                 

         let r = Math.floor( Math.random() * 16 )

         color += letters[ r ]

}

return color

}

function getColorRGB(){

    let color ='#'

    let rC = letters[ Math.floor( Math.random()*16 ) ] + letters[ Math.floor( Math.random()*16 ) ]  
    let bC = letters[ Math.floor( Math.random()*16 ) ] + letters[ Math.floor( Math.random()*16 ) ]
    let gC = letters[ Math.floor( Math.random()*16 ) ] + letters[ Math.floor( Math.random()*16 ) ] 

    color += rC + gC + bC
    
    if( color == '#000000' || color == '#FFFFFF' ){

        console.log('white', color)
        getColorRGB()

    }else{
    
        return color
    
    }
}
function getColorDiced(){

    let color ='#'

    

    let rC = letters[ dicingSynced() % 17 ] + letters[ dicingSynced() % 17 ]

    let bC = letters[ dicingSynced() % 17 ] + letters[ dicingSynced() % 17 ]
    
    let gC = letters[ dicingSynced() % 17 ] + letters[ dicingSynced() % 17 ]

    color += rC + gC + bC
    
    if( color == '#000000' || color == '#FFFFFF' ){

        getColorDiced()

    }else{
    
        return color
    
    }
}

function rgbToGrayHex(r, g, b) {

//const gray = Math.round(0.299 * (255-r) + 0.587 * (255-g) + 0.114 * (255-b))
const gray = Math.round(0.299 * r + 0.587 * g + 0.114 * b)

const hex = gray.toString(16).padStart(2, '0')

return `${hex}${hex}${hex}`

}




//--------------------------------------------------------------------------getViewBlock------------------------------------

function getViewRGB( canX, canY, ctx ){
  
    for( let i = 0; i <= canX; i++ ){
       
        for( let j = 0; j <= canY; j++){
              
                ctx.fillStyle = getColorRGB()                       
                            
                ctx.fillRect( i , j , 1 , 1 );                         
        
        }
    }

    return ctx
}


function getViewDiced( canX, canY, ctx , tn ){
 
    for( let i = 0; i <= canX; i++ ){
       
        for( let j = 0; j <= canY; j++){
                                        
                    ctx.fillStyle = getColorDiced()                       
                            
                    ctx.fillRect( i , j , 1 , 1 );                         
        
                
        }
    }

    return ctx
}

function drawCanvas( ctx, c , j , ü0, acht, dpi , i ){                    

    for( let a = 0; a < c.length; a++){
     
         for (let b = 0; b < 6; b++) {
             color += letters[Math.floor(Math.random() * 16)];
         } 

         ctx.fillStyle = color
         ctx.fillRect( c[ a ] * ( Math.floor( Math.random() * 30 * ü0 / acht ) ) + 2, j[ a ] * ( Math.floor( Math.random() * 18 * acht ) - 3 ), 15, 40 );
     
     }

 }


//-------------------------------------------------------------------------------spellTrigger------------------------------------------------------------

function trigger( spell , pulle , margottel ){

    let tS = 'trigger'

    for( let i = 0; i < 3 ; i++){
        tS += spell + pulle ? 'mach doch einfach volle pulle' : '' + margottel ? 'ich bin das margottel' : '' + 'trigger'
    } 
    tS += spell + ' triggerShit '

    triggerShit( tS , pulle , margottel ).then()

}

function triggerShit( tS , i ){

if( i < 1000000000000 ) {
     
    return Promise.resolve().then(triggerShit( tS , i++ )) 
}

}

//-------------------------------------------------------------------------------getABetFunction-----------------------------------------------

//let countDicing = 0
//let countSameDice = 0
//let decUValue = '0'
//let dice = []
//let diceNumber = 0
//let diceNumbers = []

function checkIntegrity( eyes ){

    let sumDices = 0

    for(let i = 0; i < 12; i++){

        let dice = getRanInt( eyes )

        if( dice == 6 ){

            i--

        }

        sumDices += dice



    }

    return sumDices

}

function dicing( mod ){
            
    let uValue = 0

    mod = mod ? mod : 12   

    let m       =  new Date().getMilliseconds() % mod 
    let t       =  String(new Date().getTime()) 
    
    let t1      =   t.slice(t.length - 4 , t.length -3 ) 
    let t2      =   t.slice(t.length - 3 , t.length -2 ) 
    let t3      =   t.slice(t.length - 2 , t.length -1 ) 

    countDicing++  
    
    uValue = countDicing 
    
    if( m == 0 ){

        uValue = String(uValue).slice(String(uValue).length - 3 , String(uValue).length - 1 ) 
        
        if(uValue == decUValue){

            countSameDice++ 

        }else{ 

            decUValue = uValue; countSameDice = 0 

        } 

    }

    if( countSameDice == 8 ){
        
        diceNumber = countDicing

        diceNumbers.push(( diceNumber + '').slice( 0 , ( '' + diceNumber ).length - 2 ) ) 
        
        countDicing = 0
        countSameDice = 1
        
        dice.push(Number( uValue ) )     

    }
    else{

        dicing()

    }
}

function getRandomNumber( mod ){

    mod = mod ? mod : 99
    
    for( let i = 0; i < 1001 ; i++){
        t = new Date().getMilliseconds()
        
    }

    t = t * Math.floor((t + '').slice(2))

    return t%mod

}



function diceSynced( mod ){
            
    mod = mod ? mod : 12   
   
    let m = new Date().getMilliseconds()
    
    //console.log( m )

    m = m%mod

    //console.log( m )

    let count = 0 
    
    let countSameDice = 0

    let uValue = 0
    
    let decUValue = m 
    
    do{

        uValue = getRandomNumber( 12 )

        //console.log( 'uValue' , uValue )

        if(uValue == decUValue){

            countSameDice++ 

        }else{ 

            decUValue = uValue
            countSameDice = 0 

        } 

        count++

    }while( countSameDice < m ) 

    return count-1 
}