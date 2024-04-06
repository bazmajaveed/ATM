#!/usr/bin/evn node
import inquirer from "inquirer";

// Initialized balance and  pin code
let myBalance = 500000;
let myPin = 1234;

// print welcome message
console.log("Welcome to ATM-Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code"
    }
])
if(pinAnswer.pin == myPin){
    console.log("Pin is correct, Login successfully!");
    console.log(`Current Amount Balance is ${myBalance}`);

    let operationAnswer = await inquirer.prompt([
        {
        name: "operation",
        type: "list",
        message: "Select  an option",
        choices: ["Withdraw Amount", "Check Balance"]
        }
    ])

    if(operationAnswer.operation === "Withdraw Amount"){
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])

        if(amountAnswer.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAnswer.amount;
            console.log(`${amountAnswer.amount} withdraw successfully`)
            console.log(`Your Remaining Balance is: ${myBalance}`)
        }
    }
    else if(operationAnswer.operation === "Check Balance"){
        console.log(`Your Amount Balance is ${myBalance}`);
    }
     else{
        console.log("Pin is incorrect, please try again!")
     }   
    }

