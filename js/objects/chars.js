function getCharacter( character, i ){

    let container = []

    container[ 'sudokuhans' ]    =   {

        classOrigin     : "dd uni class son",
        type            : 'likes penetrating but knows when it goes to far',
        strongs         : 'has experience in performing',
        maxSplits       : getRanInt( 9 ),
        binding         : 'Pandora',
        rang            : 'frontman',
        tasks           : '',
        scrabble        : getRanInt( 64 ),
        color           : 'dark'
    }

    
    container[ 'thomas' ]    =   {

        maxSplits       : getRanInt( 9 ),
        scrabble        : getRanInt( 7 )
    }


    return container[ character ] ? container[ character ] : container[ 'thomas' ]







}
