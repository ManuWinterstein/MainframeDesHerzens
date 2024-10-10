function getCharacter( character, i ){

    let container = []

    container[ 'didder' ] = { 
        
        classOrigin     : "middleClass EastGermany",
        type            : "devot pyromaniac who always search a mother he can serve to death",
        strongs         : "talented in various things and the ability to catch wannebe smarts with banal thesen",
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
    
    container[ 'ente' ]   =  {
        
        classOrigin     : "3 times bastarded from lowerClass mother with illegitimate father to fake partnership with annen eastern establishment artist father with semi prominence",
        type            : "idiot with cruely rapertendencies but master moral and the ability to see things as godgiven and normal only for him... style gemeiner piefke pedo prince with special taste in art and design",
        strongs         : "sees whats good and bad and can realistical value artsy things",
        maxSplits       : getRanInt(8),
        binding         : 'Margott, but only devoted to knowledge',
        rang            : 'monch',
        scrabble        : getRanInt( 64 ),
        color           : 'dark blue'
    
    }
    
    container[ 'felix' ]  = { 
        
        classOrigin     : "Tu privileged lower GDR people who love being rich",
        type            : "little popanz feeder which aiming death trough pain of his victim of choice with megalomania",
        strongs         : "maybe he can get a killer with his little knive",
        maxSplits       : getRanInt(9),
        binding         : 'Margott',
        scrabble        : getRanInt( 64 ),
        heroStage       : 'Otter',
        rang            : 'psi-maximizer',
        color           : 'blue'
    
    }

    container[ 'nosen ' ]    =   {

        classOrigin     : "Always Low Class formerly GDR Citizen grown up in some nice ghetto universe of dd-town",
        type            : 'motherly raised up bondage fan with constrains who dreams of easy and flowing through time and space and gets lonly over thinking the opposit of this as reality',
        strongs         : 'mostly clear view and interests in knowing the worlds spiritual side or botanic and music',
        maxSplits       : getRanInt(3),
        binding         : 'Margott (mostly from taking use of me)',
        rang            : 'kernel-abt',
        scrabble        : getRanInt( 64 ),
        color           : 'dark orange'
    }

    container[ 'foolmann' ]    =   {

        classOrigin     : "west german hesse of the old skool middleclass maybe to verbohrt to work in west germany with settled wellbeing volume in figure",
        type            : 'motherly raised he believes only believes in conventual treatments and is more on the greedyside and has understoodment for cute little greedees who can make afraid of things to come like the other who work around him',
        strongs         : 'acting kinda professionell',
        maxSplits       : getRanInt( 58 ),
        binding         : 'Pandora (mostly from taking use of me)',
        rang            : 'psychiatrist',
        scrabble        : getRanInt( 64 ),
        color           : 'red'
    }
    container[ 'grenate' ]    =   {

        classOrigin     : "early subt and always dreaming of an more upper class life olding pseudo realistic bottom middle class eastern maybe shy caring girl which often gets disapointed by sociaty",
        type            : 'lässtige nonne',
        strongs         : 'pflichtbewusst',
        maxSplits       : getRanInt( 9 ),
        binding         : 'Pandora and aiming for margott',
        rang            : 'nurse',
        scrabble        : getRanInt( 64 ),
        color           : 'blue'
    }
    container[ 'kev' ]    =   {

        classOrigin     : "bastarded trough mother forced rebell not blessed with to much talents small gen z homo guy",
        type            : 'straßenjunge',
        strongs         : '',
        maxSplits       : getRanInt( 9 ),
        binding         : 'Margott?Gettho',
        tasks           : 'praktizieren',
        rang            : 'insasse',
        scrabble        : getRanInt( 64 ),
        color           : 'pink'
    }
    
    container[ 'chancler' ]    =   {

        classOrigin     : "good childhood with semi bottom eastern upper class annen parents",
        type            : 'the unguilty strolch and omaboy...lässtiger clepto',
        strongs         : 'technical understanding physics',
        maxSplits       : getRanInt( 9 ),
        binding         : 'Margott',
        rang            : 'delegate-medium',
        scrabble        : getRanInt( 64 ),
        color           : 'blue'
    }
 
    container[ 'mummelkuh' ]    =   {

        classOrigin     : "",
        type            : '',
        strongs         : 'knuppelnase und locken die anzeigen wie sie drauf ist und das lets go sailing feeling',
        maxSplits       : getRanInt( 9 ),
        binding         : 'devoted to the devote only of knowledge and margott',
        rang            : 'bachelor of research',
        tasks           : 'guessen verifzieren validieren',
        scrabble        : getRanInt( 64 ),
        color           : 'yellow'
    }
    container[ 'katemiddlegrau' ]    =   {

        classOrigin     : "annendaughter",
        type            : 'just a fat and happy girl whith no special abilities',
        strongs         : 'open in kind and mind and knows what she wants',
        maxSplits       : getRanInt( 9 ),
        binding         : 'Pandora',
        rang            : 'wannebe hostess in margotts team',
        tasks           : 'establish guide and communicate',
        scrabble        : getRanInt( 64 ),
        color           : 'yellow'
    }
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
    container[ 'thejoegarl' ]    =   {

        classOrigin     : "upper middle class canadien with scientology background",
        type            : 'pony type bondage fan girl and wannebe genius',
        strongs         : 'some kind though with taker qualities',
        maxSplits       : getRanInt( 9 ),
        binding         : 'nobody',
        rang            : '',
        tasks           : '',
        scrabble        : getRanInt( 64 ),
        color           : 'red'
    }
    
    container[ 'thomas' ]    =   {

        maxSplits       : getRanInt( 9 ),
        scrabble        : getRanInt( 7 )
    }


    return container[ character ] ? container[ character ] : container[ 'thomas' ]







}