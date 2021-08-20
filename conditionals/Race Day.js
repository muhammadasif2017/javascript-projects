let raceNumber = Math.floor(Math.random() * 1000);
const registerEarly = false;
const age = 26;

if (age > 18 && registerEarly){
  raceNumber += 1000;
}
if (age > 18 && registerEarly){
  console.log(`Runner who are ${age} years old and registered early will run at 9:30 am.`);
}
else if (age > 18 && !registerEarly){
  console.log(`Runner who are ${age} years old and did not registered early will run at 11:00 am.`);
}
else if ( age < 18 && registerEarly){
   console.log(`Runners who are ${age} years old and registered early will run at 12:30 pm.`);
}
else if ( age < 18 && !registerEarly){
   console.log(`Runners who are ${age} years old and did not register early will run at 12:30 pm.`);
}
else{
  console.log('Should see the registration desk!');
}