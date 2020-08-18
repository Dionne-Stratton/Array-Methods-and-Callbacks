import { fifaData } from './fifa.js';
// console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final */

function taskOneA(object){
    object.forEach(element => {

        if(element.Year === 2014 && element.Stage === 'Final'){
            console.log(element['Home Team Name']);
        }
    });
}
taskOneA(fifaData);

/*
(b) Away Team name for 2014 world cup final */

function taskOneB(object){
    object.forEach(element => {
        
        if(element.Year === 2014 && element.Stage === 'Final'){
            console.log(element['Away Team Name']);
        }
    });
}
taskOneB(fifaData);

// (c) Home Team goals for 2014 world cup final

function taskOneC(object){
    object.forEach(element => {
        
        if(element.Year === 2014 && element.Stage === 'Final'){
            console.log(element['Home Team Goals']);
        }
    });
}
taskOneC(fifaData);

// (d) Away Team goals for 2014 world cup final

function taskOneD(object){
    object.forEach(element => {
        
        if(element.Year === 2014 && element.Stage === 'Final'){
            console.log(element['Away Team Goals']);
        }
    });
}
taskOneD(fifaData);

// (e) Winner of 2014 world cup final */

function taskOneE(object){
    object.forEach(element => {
        
        if(element.Year === 2014 && element.Stage === 'Final'){
            console.log(element['Win conditions']);
        }
    });
}
taskOneE(fifaData);

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinalsData(data) {
    return data.Stage === 'Final';
  }
 
  function getFinals(data) {
    return data.filter(getFinalsData);
  }
 
  console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(callback) {
    let years = callback.map(callback =>
        callback.Year)

    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(func) {
    let winners = [];
    func.forEach( element => {
        if(element['Home Team Goals'] > element['Away Team Goals']){
            winners.push(element['Home Team Name']);
        }
        else if(element['Away Team Goals'] > element['Home Team Goals']){
            winners.push(element['Away Team Name']);
        }
        else{
            winners.push(element['Win conditions'].split(' ')[0]);
        }
    })
    return winners;
};

console.log(getWinners(getFinals(fifaData)));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(func1, func2) {
    let newArr = [];
    for(let i = 0; i < func1.length; i++){
        newArr.push('In '+ func2[i] + ', ' + func1[i] + ' won the world cup!');
    }
    return newArr;
};

console.log(getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData))));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    let home = [];
    let away = [];
    data.forEach(element =>{
        home.push(element['Home Team Goals']);
        away.push(element['Away Team Goals']);
    })
    const homeTotal = home.reduce( (a, b) => a + b);
    const awayTotal = away.reduce( (a, b) => a + b);

    return {'Average Goals - Home Team': homeTotal/home.length, 'Away Team': awayTotal/away.length }
};

console.log(getAverageGoals(fifaData));


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
