let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Cian';
if(typeof userInput === 'string'){
    userName = userInput;
}

function generateError(message: string, code: number){
    throw {message: message, erorCode: code};
    //while(true){}
}

const result = generateError('An error occurred!', 500);