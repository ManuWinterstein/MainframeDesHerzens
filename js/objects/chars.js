function getCharacter( character, i ){

    let container = []

    container[ 'didder' ] = { 
        
        classOrigin     : "middleClass EastGermany",
        type            : "devot pyromaniac who always search a mother he can serve to death",
        strongs         : "talented in various things and the ability to catch wannebe smarts with banal theses",
        maxSplits       : 72,
        binding         : 'Margott',
        scrabble        : getRanInt( 64 ),
        color           : 'yellow',
        rang            : 'transendency-medium & filter',
        heroStage       : 'Ant',
        canWork         : true,
        Spells          : [

                'who is more broker than the joker #rt24'

        ]
        
    }
    
  
    
    container[ 'thomas' ]    =   {

        maxSplits       : getRanInt( 9 ),
        scrabble        : getRanInt( 7 )
    }


    return container[ character ] ? container[ character ] : container[ 'thomas' ]







}
