let userName = '';
// Greeting to the user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!')
// Question to ask
let userQuestion = 'Will I become a werewolf tonight?';
// Printing the question
console.log(`The user asked: ${userQuestion}`);
// Generating the random number between 1 to 8
const randomNumber = Math.floor(Math.random() * 8);
// eightBall variable to store value on the randomNumber
let eightBall = '';
// using switch 
switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predic now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;  
}
console.log(`The eight ball answered: ${eightBall}`);
