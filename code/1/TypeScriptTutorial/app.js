"use strict";
var userInput;
var userName;
userInput = 5;
userInput = 'Cian';
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, erorCode: code };
    //while(true){}
}
var result = generateError('An error occurred!', 500);
