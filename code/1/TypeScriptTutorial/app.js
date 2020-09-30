function combine(input1, input2, resultConverion) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConverion === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    //    if(resultConverion === 'as-number'){
    //        return +result;
    //    } else {
    //        return result.toString();
    //    }
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combineStringAges = combine('30', '26', 'as-number');
console.log(combineStringAges);
var combinedNames = combine('Cian', 'Lennon', 'as-text');
console.log(combinedNames);
