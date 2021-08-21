// message to be converted to whale language
let input = 'turpentine and turtles';
// whales only speak in vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
// store the vowels from input string
let resultArray = [];
// loop to iterate through input
for (let i = 0; i < input.length; i++){
  //console.log('i is '+ i);
  for (let j = 0; j < vowels.length; j++){
    //console.log('j is '+ j);
    if (input[i] === vowels[j]){
      resultArray.push(input[i]);
      break;
    }
  }
  if (input[i] === 'e' || input[i] === 'u'){
    resultArray.push(input[i]);
  }
}

console.log(resultArray.join('').toUpperCase());