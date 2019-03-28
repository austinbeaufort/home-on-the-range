m = {
    range: function(firstNumber, secondNumber) {
 
        if (firstNumber < 0 && secondNumber === undefined) {
            secondNumber = 0;
            return makeArray(firstNumber, secondNumber);
        } 
        
        else if (secondNumber === undefined) {
            secondNumber = firstNumber;
            firstNumber = 0;
            return makeArray(firstNumber, secondNumber);
        } 
        
        else if (firstNumber <= secondNumber) {
            return makeArray(firstNumber, secondNumber);
        } 
        
        else if (firstNumber >= secondNumber) {
            return makeReverseArray(firstNumber, secondNumber);
        }
    
        return rangeArray;
    },
    add: function(...numbers) {
        let numbersFlattened = numbers.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

        let numbersToBeSummed = numbersFlattened.map((item) => Number(item));
        
    
        let sum = numbersToBeSummed.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sum;
    }

}



function makeArray (firstNumber, secondNumber) {
    let rangeArray = [];
    for (let i = firstNumber; i <= secondNumber; i++) {
        rangeArray.push(i);
    }   
    return rangeArray;
}

function makeReverseArray(firstNumber, secondNumber) {
    let rangeArray = [];
    for (let i = firstNumber; i >= secondNumber; i--) {
        rangeArray.push(i);
    }
    return rangeArray;
}


module.exports = m;