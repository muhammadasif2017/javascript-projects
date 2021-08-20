/*
We humans need more than that. If we don’t sleep enough, we accumulate sleep debt.
In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.
The program will determine the actual and ideal hours of sleep for each night of the last week.
Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/
const getSleepHours = day => {
    if (day === 'monday') {
      return 8;
    } else if(day === 'tuesday') {
      return 6;
    }else if(day === 'wednesday') {
      return 6;
    }else if(day === 'thursday') {
      return 6;
    }else if(day === 'friday') {
      return 6;
    }else if(day === 'saturday'){
      return 7;
    }else if (day === 'sunday'){
      return 8;
    }
  };
  //console.log(getSleepHours('sunday'));
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  // More improved version of getActualSleepHours
  // const getActualSleepHours = () => 6+7+6+6+6+7+9;
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }
  // const getIdealSleepHours = idealHours => idealHours * 7;
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('user got the perfect amount of sleep');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('user got more sleep than needed');
    } else {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  }
  calculateSleepDebt();
  
  