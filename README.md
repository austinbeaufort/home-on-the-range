# home-on-the-range ![deer in meadow](https://i.ibb.co/mC2wVF4/forest2.jpg)
home-on-the-range is an intuitive custom math library for developers.

## Installation
Using npm:
```javascript
npm install home-on-the-range
```
In Node.js:
```javascript
var h = require('home-on-the-range');
```
Usage:
```javascript
h.range(2, 8); // => [2, 3, 4, 5, 6, 7, 8]
h.range(7, 3); // => [7, 6, 5, 4, 3]
h.range(-3, -6) // => [-3, -4, -5, -6]
h.range(-3, 2) // => [-3, -2, -1, 0, 1, 2]
h.range(5); // => [0, 1, 2, 3, 4, 5]
h.range(-4); // => [-4, -3, -2, -1, 0]

h.add(4, "2", "1") // => 7
h.add([3, "-2", 1], -6) // => -4
h.add([3], "22", [-1, -4]) // => 20

// quotient will drop the remainder. There was no operator for this functionality, so here it is.
h.quotient(12, 3) // => 4
h.quotient(14, 3) // => 4

h.deep([22, [[[3], 4]], [4], "33"], "7", [[10], 9]) // => [22, 3, 4, 4, "33", "7", 10, 9];

h.createFibArray(10) // => [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n, 21n, 34n, 55n, 89n, 144n];

// Note: createFibArray() returns BigInt's for percision as these numbers 
//get large quickly. If the numbers do not exceed
// javascripts MAX_SAFE_INTEGER then it is safe to map them back to
// numbers , e.g. fibArray.map(item => Number(item));

h.getPrimeFactors(500) // => [2, 2, 5, 5, 5];
h.getPrimeFactors(145) // => [5, 29];

h.findLargestPrimeFactor(1023) // => 31
h.findSmallestPrimeFactor(28) // => 2

h.numIsPalindrome(50405) // => true
h.numIsPalindrome(444334) // => false

h.findLCM(1, 2, 3, 4, 5) // => 60
h.findLCM(1, [2, [3]], "4", "5", [6, "7"]); // => 420

// Note: findLCM will take arguments as numbers, strings, and / or arrays. intuitive.

h.findNthPrime(100) // => 541
// Note: Works quickly for first 10,000 primes, and then up to 200,000th prime in less than 10 seconds. After the 200,00th prime no promises, but your computer may be faster than mine!

h.getPrimeArray(301, 422) // => [ 307, 311, 313, 317, 331, 337, 347, 349, 353 ]
h.getPrimeArray(22) // => [2, 3, 5, 7, 11, 13, 17, 19]

h.isPrime(101) // => true
h.isPrime(27) // => false

h.shuffle([1, 2, 3, 4, 5]) // Randomly rearranges array. an example might be: [4, 1, 5, 3, 2]

h.count([5, 5, 3, 7, 5], 5) // => 4
//Takes in an array and item as arguments. Counts how many times the item appears in the array and returns the count.

h.removeDuplicates([3, 3, 5, 7, 5, 1]) // => [3, 5, 7, 1]

h.randomInt(1, 6) // Will return a random Integer (inclusive) between 1 and 6.

h.randomChoice(['Joe', 'April', 'Frank', 'Sam']) // Will return one array value at random from the given array. 

h.getPythagoreanTriples(1000) // Returns all triples of (a^2 + b^2 = c^2) where "c" is less than given argument. 
// In this case, where "c" is less than 1000.

h.addDigitsOfLargeNumber(67451) // => 21 . Returns the sum of digits in the number given as the argument.

```

Combined Usage Examples:
```javascript
h.add(h.deep([[[33], "22"], 7], "4", ["2", 3])) // => 71

var array = h.range(2, 7); // => [2, 3, 4, 5, 6, 7]
var array2 = ["2", "3", ["4"]];
h.add(h.deep(array, array2)); // => 36
```

### Notes
h.range(2, 4) produces an array that is inclusive of the starting and
ending number. [2, 3, 4];

h.add() will automatically convert numbers from typeof "string" to typeof "number". 
Arrays will work in the function. Nested arrays "will not" work.