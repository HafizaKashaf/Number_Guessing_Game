#! /usr/bin/env node

import inquirer from "inquirer"

// 1) Computer will ganerate a random number
// 2) User input for guessing number
// 3) Computer User input with Computer ganerate number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1)
// console.log(randomNumber)
const answer = await inquirer.prompt([

    {
        name: "userguessedNumber",
        type: "number",
        message: "Please guessed a number between 1 _ 10 : ",
    },
]);

if(answer.userguessedNumber === randomNumber){
    console.log("congratulations! you guessed right number")
}else{
    console.log("you guessed wrong number")
}