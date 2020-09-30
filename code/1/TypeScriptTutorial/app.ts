function combine(
    input1: number | string, 
    input2: number | string, 
    resultConverion: 'as-number' | 'as-text'
    ){
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConverion === 'as-number'){
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    return result;
//    if(resultConverion === 'as-number'){
//        return +result;
//    } else {
//        return result.toString();
//    }
}

const combinedAges = combine(30,26, 'as-number');
console.log(combinedAges);

const combineStringAges = combine('30','26','as-number')
console.log(combineStringAges);

const combinedNames = combine('Cian', 'Lennon', 'as-text');
console.log(combinedNames);
