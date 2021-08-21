let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// removing the last item of array
secretMessage.pop();
// checking the length of array
//console.log(secretMessage.length);
// adding elements in array
secretMessage.push('to', 'Program');
// accessing the index of given element
const index = secretMessage.indexOf('easily');
// chaning the value of the accessed index
secretMessage[index] = 'right';
// remvoing the first element
secretMessage.shift();
// adding element to the beginning
secretMessage.unshift('Programming');
// getting the index number of get element
const indexOfGet = secretMessage.indexOf('get');
const indexOfTime = secretMessage.indexOf('time');
// removing the elementa and replacing with different elements
secretMessage.splice(indexOfGet, indexOfGet-indexOfTime, 'know') 
console.log(secretMessage.join(' '))