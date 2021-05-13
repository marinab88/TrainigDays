 //Select an event at random
const getRandEvent = () => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};
 
//Returns the number of days to train based on the event selected
const getTrainingDays = event => {
 let days;
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
 
  return days;
};

//Print the athlete name, event, and number of days to the console
const name = 'Nala';

const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};
 
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};
 
const event = getRandEvent();
const days = getTrainingDays(event);
 
logEvent(name, event);
logTime(name, days);

//Trying function for another competitor
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(name2, event2);
logTime(name2, days2);