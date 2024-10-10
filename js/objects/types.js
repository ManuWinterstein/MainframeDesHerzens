function getType( type ){

let container = []

container[ 'scrabble' ]                 = [
    
    'E' ,'E' ,'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'E' , 'N' , 'N' , 'N' , 'N' , 'N' , 'N' , 'N' , 'N' , 'N' , 'S' , 'S' , 'S' , 'S' , 'S' , 'S' , 'S' , 'I' , 'I' , 'I' , 'I' , 'I' , 'I' , 'R' , 'R' , 'R' , 'R' , 'R' , 'R' , 'T' , 'T' , 'T' , 'T' , 'T' , 'T' , 
    'U' , 'U' , 'U' , 'U' , 'U' , 'U' , 'A' , 'A' , 'A' , 'A' , 'A' ,'G' , 'G' , 'G'  , 'H' , 'H' , 'H' , 'H' , 'D' , 'D' , 'D' , 'D' , 'L' , 'L' , 'L' , 'O' , 'O' , 'O' ,
    'M' , 'M' , 'M' , 'M' , 'B' , 'B' , 'B' , 'W' , 'Z' , 'Z' ,
    'C' , 'C' , 'F' , 'F' , 'K' , 'K' , 'P' ,
    '',
    'Ä' , 'J' , 'Ü' , 'V' ,
    '',
    'Ö' , 'X' ,
    '',
    'Q' , 'Y', 
    ' '
]

container[ 'mirroedLettersLowercase' ]  = 'zyxwvutsrqponmlkjihgfdcba'
container[ 'lettersLowerCase' ]         = 'abcdefghijklmnopqrstuvwxyz%°?(")(">/°= '
container[ 'letticons' ]                = [ 'U`P' , '%°?' , '/°°>' , '(">' , '/°=' , '(")' , '§%;' , '|°°;' , '|°!°|' ]

container[ 'numbers' ] =  [ '1' , '2' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '0' ]

return container[ type ]? container[ type ] : container[ 'lettersLowerCase' ]

}