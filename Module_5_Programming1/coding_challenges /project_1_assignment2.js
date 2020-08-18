const x =  parseInt(prompt(" Enter your test score"))
    switch(x)
{
        case(x > 95):
            console.log("A+")
        case(x > 88 || x <= 90 ):
            console.log("A")
        case( x > 84 || x < 88) :
			console.log ("B+") 
		case ( x > 76 || x < = 84 ) :
			console .log (“C+”)
		case ( x > 70 || x < 76 ) :
			console.log ( “C”) 
        case (x > 67 || x < = 70):
			console.log ( “D+”)
        case( x > 64 ||  x < = 67 ):
			console .log( “D”)
         case ( x <=64 ):
			console.log ( “F”)
 }