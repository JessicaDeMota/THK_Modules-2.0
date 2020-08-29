//CHALLENGE 1 :
//Below have a list of full names, we want to split these names into an array containing the first and last names as separate items
//Then we want to push these names to two different arrays named first_name, last_name 
//[“ Westley Snipes” , “Nicholas Cage” , “Nasir Jones”, “Sean Carter”, “ Sean Combs”, 
//“ Michael Jordan” , “ Patrick Ewing” ] 
//full _names  = [“ Westley Snipes” , “Nicholas Cage” , “Nasir Jones”, “Sean Carter”, “ Sean Combs”, “ Michael Jordan” , “ Patrick Ewing” ] 

First_Name = []
Last_Name = []

for(let i = 0; i < full_name_length; i++ )
{
    if ( i > 0)
    {
        first_name.push(full_name(i))
    }
    else 
    {
        last_name.push(full_name(i))
    }

};
