// import * as dataFunctions from './data_functions.js'
// import everything from a js file - use like stringFunctions.addToString('xyz')

import { transcribe } from './data_functions.js'

// block scope within if != function scope
function checkScope() {
    let i = 'function scope';
    if (true) {
      let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
}
checkScope();  


// Object.freeze(obj) prevents data mutation (const declaration not enough)
  function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };

    Object.freeze(MATH_CONSTANTS)
      
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
const PI = freezeObj();


// not efficient
var myConcat = function(arr1, arr2) {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));


// efficient
var myConcat = (arr1, arr2) => {
    return arr1.concat(arr2);
  };
  
console.log(myConcat([1, 2], [3, 4, 5]));


// default values
const increment = (number, value) => number + value;
const incrementWithDefault = (number, value = 1 ) => number + value;


// using rest parameter to accept *args
const sum = (x, y, z) => {
    const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }


const sumWithSpread = (...args) => {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  }


// spread to copy all all contents of arr1 to arr2
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];

console.log(arr2);


// destructuring assignment
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

// standard methodology
//   const today = HIGH_TEMPERATURES.today;
//   const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
const { today, tomorrow } = HIGH_TEMPERATURES
console.log(today, tomorrow)


// destructuring to assign variables from objects
const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
//   today,tomorrow from object
//   ~ const highToday = HIGH_TEMPERATURES2.today
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES2

console.log(highToday)


// use destructuring assignment to assign variables from nested object
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  const {today: {low:lowToday, high: highToday2}} = LOCAL_FORECAST 
  // const lowToday = LOCAL_FORECAST.today.low;
  // const highToday2 = LOCAL_FORECAST.today.high;


// destructuring to assign variables from arrays
let a = 8, b = 6;
[a, b] = [b, a]


// Destructuring Assignment with the Rest Parameter to Reassign Array Elements
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [,,...arr] = list;
  console.log(arr)
  return arr;
}
const arr = removeFirstTwo(source);


// Destructuring Assignment to Pass an Object as a Function's Parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

    // half(stats) will automatically use stats.max, stats.min as args
const half = ({max, min}) => (max + min) / 2.0; 


// Concise Object Literal Declarations Using Object Property Shorthand
// returns an object, i.e. {name:'bob', age:'29', gender:'yes'}
const createPerson = (name, age, gender) => {
    console.log(({ name, age, gender }))
    return ({name,age,gender})
};
  

// Concise declarative functions
// no need to do setGear: function(newGear) {}
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  bicycle.setGear(3);
console.log(bicycle.gear);
  

// class Syntax to Define a Constructor Function
// Only change code below this line
class Vegetable{
    constructor(vegetableName){
      this.name = vegetableName
    }
  }
  // Only change code above this line
  
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'


// getters and setters to Control Access to an Object
class Thermostat {
    constructor(fahrenheit) {
      this.fahrenheit = fahrenheit;
    }
    
    get temperature() {
      return (5 / 9) * (this.fahrenheit - 32);
    }
    
    set temperature(celsius) {
      this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
  }
  // Only change code above this line
  
  const thermos = new Thermostat(76); // Setting in Fahrenheit scale
  let temp = thermos.temperature; // 24.44 in Celsius
  thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
  















// exporting a function or class
export { Thermostat, sumWithSpread }