// First Project 
// Prompt : We want to create a personal budgeting app. This is going to ask our user a bunch 
//of questions, save their information, then run some comparative statements so we can give them some 
//finacial advice.

// Step 1 : Create prompts to capture the following and save them to variables :
// Code Pen Link : https://codepen.io/jessicademota/pen/KKzMZXa

const foodCost = parseInt(prompt("foodCost:"))
const weeklyIncome = parseInt(prompt("weeklyIncome:"))
const housingCost = parseInt(prompt("housingCost"))
const transportationCost = parseInt(prompt("transportationCost"))
const otherCost = parseInt(prompt("otherCost"))
const save_in_a_year = parseInt(prompt("How much do you save in a year ?"))


//Step 2 :
//Next, we take how much they want to save in a year and divide it by 52 because we want to run
//a check to see if they make enough a week to save the amount they would need to reach 
//if their goal after a year 

var weeklySave = save_in_a_year / 52 


// Step 3:
//Next, we need to do some math :
//We need to subtract the total cost from their revenue. 

var totalCost =  foodCost + housingCost + transportationCost + otherCost;
var revenue = weeklyIncome - totalCost;


// Step 4 :
//Then we need to run a conditional check to see if the amount left over is greater than or less than the amount they need to save a week. If it is, we tell them they are on 
//track; if not we tell them they need to save X amount more a week,X is the difference 
//between what they do and what they need to save.This may seem more complex than our examples, but the goal here is for you to use all 
//you have learned in this module before moving forward.

if (revenue >= weeklySave)
    {
        console.log ("You are on track")
    }
else if ( revenue < weeklySave)
    {
        var X = weeklySave - revenue 
        console.log("You need to make " +  X  + " more dollars per week in order to reach your weekly saving goal" ) 
       
    }



