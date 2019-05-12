h = {
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
    
    // adds strings and numbers
    add: function(...numbers) {
        let numbersFlattened = numbers.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

        let numbersToBeSummed = numbersFlattened.map((item) => Number(item));
        
    
        let sum = numbersToBeSummed.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sum;
    },
    
    // complete array flatten
    deep: function(...arrays) {
        let levelArray = [];
        for (let i = 0; i < arrays.length; i++) {
            if(!Array.isArray(arrays[i])) {
                levelArray.push(arrays[i]);
                continue;
            }
            let newArray = arrays[i].flat(Infinity);
            levelArray.push(newArray);
        }
        let flatArray = levelArray.flat();
        return flatArray;
    },

    // 
    createFibArray: function(numToReach) {
        let firstNum = BigInt(1);
        let secondNum = BigInt(1);
        let total = 0;
        let fibArray = [];
        let count = 0;
        fibArray.push(BigInt(total));
        fibArray.push(firstNum);
        fibArray.push(secondNum);
        while(true) {
            total = BigInt(firstNum + secondNum);
            if (count < numToReach) {
                fibArray.push(total);
                firstNum = BigInt(secondNum);
                secondNum = BigInt(total);
                count++;
            }
            else {
                break;
            }
        }
        return fibArray;
    },
    getPrimeFactors: function(number) {
        let primeArray = [];
        let i = 2;
        while(i < 1000000) {
            if (number % i === 0) {
                primeArray.push(i);
                number /= i;
                i = 2;
            }
            else {
                i++;
            }
        }
        return primeArray;
    },

    findLargestPrimeFactor: function(number) {
        let primeArray = this.getPrimeFactors(number);
        let largestPrime = Math.max(...primeArray);
        return largestPrime;
    },

    findSmallestPrimeFactor: function(number) {
        let primeArray = this.getPrimeFactors(number);
        let smallestPrime = Math.min(...primeArray);
        return smallestPrime;
    },

    numIsPalindrome: function(number) {
        let newNumber = String(number).split('');
        let numToCheck = Math.floor(newNumber.length / 2);
        for (let i = 0; i <= numToCheck; i++) {
            if (newNumber[i] == newNumber[newNumber.length - i - 1]) {
                if (i == numToCheck) {
                    return true;
                }
                continue;
            }
            break;
        }
        return false;
    },

    findLCM: function(...args) {
        let newArray = this.deep(args);
        let numArray = newArray.map(item => Number(item));
        let found = false;
        let answer = 2;
        while (found === false) {
            found = numArray.every(item => {
                return answer % item === 0;
            });
            if (found === true) return answer;
            answer++;
        }
        return answer;
    },

    findNthPrime: function(number) {
        let count = 0;
        let rangeArray = h.range(2, 50000000);
        for (let item of rangeArray) {
            let isPrime = true;
            for (i = 2; i <= Math.sqrt(item); i++){
                if(item % i === 0 && item != i){
                   isPrime = false;
                }
             }
            if (isPrime === true) {
                count++;
                if (count === number) {
                    return item;
                }
            }
        }
        return primeArray;
    },

    getPrimeArray: function(...args) {
        let primeArray = [];
        if (args.length === 1) {
            args[1] = args[0];
            args[0] = 2;
        }
        let rangeArray = h.range(args[0], args[1]);
        for (let item of rangeArray) {
            let isPrime = true;
            for (i = 2; i <= Math.sqrt(item); i++){
                if(item % i === 0 && item != i){
                   isPrime = false;
                }
             }
            if (isPrime === true) {
                primeArray.push(item);
            }
        }
        return primeArray;
    },

    isPrime: function(number) {
        for (i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0 && number != i){
                return false;
            }
        }
        return true;
    },

}





// Helper functions

// Range helper -------------------------------------------------------------------------------
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
// ------------------------------------------------------------------------------------------

console.log(h.isPrime(101));

module.exports = h;