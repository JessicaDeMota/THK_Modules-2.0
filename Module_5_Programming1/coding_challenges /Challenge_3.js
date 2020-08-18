
//Step 1:  Take the following lyrics as a long string and use the split string method to change it 
//Step 2: Iterate thru each string and when a string has the letter ‘s’ in it replace it with ‘S’
//Step 3: Join the array back into a string again using ‘ ‘ as a separation with the join string method 
//Step 4 : Log the new string to your screen 

let quote = 
"Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm outfor presidents to represent me, I'm out for dead presidents to represent me, "

let words = quote.split(' ')

console.log(words)

let word$ = [ ]

for(let word of words)
{
    let transfomedword = word.replace('s','$' )
    word$.push(transformedword)
}

console.log(word$)

let tranformedQuote = word$.join(" ")

console.log(transformedQuote)






