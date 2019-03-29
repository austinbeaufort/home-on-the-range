# home-on-the-range ![deer in meadow](https://i.ibb.co/mC2wVF4/forest2.jpg)
home-on-the-range is an intuitive custom math library for developers.

## Installation
Using npm:
```javascript
npm install home-on-the-range
```
In Node.js:
```javascript
var m = require('home-on-the-range');
```
Usage:
```javascript
m.range(2, 8); // => [2, 3, 4, 5, 6, 7, 8]
m.range(7, 3); // => [7, 6, 5, 4, 3]
m.range(-3, -6) // => [-3, -4, -5, -6]
m.range(-3, 2) // => [-3, -2, -1, 0, 1, 2]
m.range(5); // => [0, 1, 2, 3, 4, 5]
m.range(-4); // => [-4, -3, -2, -1, 0]

m.add(4, "2", "1") // => 7
m.add([3, "-2", 1], -6) // => -4
m.add([3], "22", [-1, -4]) // => 20

m.deep([22, [[[3], 4]], [4], "33"], "7", [[10], 9]) // => [22, 3, 4, 4, "33", "7", 10, 9];
```

Combined Usage Examples:
```javascript
m.add(m.deep([[[33], "22"], 7], "4", ["2", 3])) // => 71

var array = m.range(2, 7); // => [2, 3, 4, 5, 6, 7]
var array2 = ["2", "3", ["4"]];
m.add(m.deep(array, array2)); // => 36
```

### Notes
m.range(2, 4) produces an array that is inclusive of the starting and
ending number. [2, 3, 4];

m.add() will automatically convert numbers from typeof "string" to typeof "number". Arrays will work in the function. Nested arrays "will not" work.