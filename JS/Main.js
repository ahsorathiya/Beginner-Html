/**
 * Filename: e:\VL\LearnHTML\JS\Main.js
 * Path: e:\VL\LearnHTML\JS
 * Created Date: Thursday, February 15th 2018, 11:30:25 am
 * Author: AliHusain Sorathiya
 * 
 * Copyright (c) 2018 Your Company
 */

 function print() {
    console.log("Hello " + arguments[0]);
    var person = {
        id: 1,
        name: "ALI HUSSAIN"
    }
    document.write(person.id + " " + person.name + " ");
}

function add(a, b) {

    var c = a + b;
    console.log("The addition of two numbers is " + c);
}

function multiply(a, b) {

    var c = a * b;
    console.log("The multiplication of two numbers is  " + c);
}

function substract(a, b) {

    var c = a - b;
    console.log("The substraction of two numbers is  " + c);


}

function divide(a, b) {
    var c = a / b;
    console.log("The Division of two numbers is  " + c);
}
