// variable kelvin stored the today's temperature in kelvin format
const kelvin = 293;
// celsius variable store the converted temperature in Celsius format
const celsius = kelvin - 273;
// fahrenheit var store the temprature converted from celsius to Fahrenheit format
let fahrenheit = celsius * (9 / 5) + 32;
// Converted the fahrenheit temprature to nearest decimal using floor method
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degree Fahrenheit.`)

// Convert to Newton
let newton = celsius * (33 / 100);
 
// Round down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);