'use strict';

var userName = prompt('What is your name?');
//console.log(userName + ' this is the answer to what is your name');
//alert('It\'s a pleasure to meet you ' + userName);

// var codeQuestion = prompt('Do you know how to use Javascript?').toLowerCase();
// //console.log('This is the answer to do you know how to use Javascript ' + codeQuestion);
// alert('Remember to use console.log in the browser to test code!');
// // Q1
// if(codeQuestion === 'yes' || codeQuestion === 'y'){
//   alert(userName + ' Will you teach me?');
// }
// else if(codeQuestion === 'no' || codeQuestion === 'n'){
//   alert(userName + ' I don\'t either, but we\'ll be masters soon enough.');
// } else {
//   alert(userName + ' Ah, ah, ah, you didn\'t say the magic word!');
// }
// // Q2
// var determined = prompt('Are you determined to learn JS ' + userName + '?').toLowerCase();
// //console.log('This is the answer to are you determined to learn JS ' + determined);
// alert('Remember that with code, less is more');

// if(determined === 'yes' || determined === 'y'){
//   alert('Stay motivated ' + userName + '!');
// }
// else if(determined === 'no' || determined === 'n'){
//   alert('You better fix your attitude and buckle up then ' + userName);
// } else {
//   alert('Yes or no please');
// }
// // Q3
// var uncomfortable = prompt('Are you uncomfortable yet?').toLowerCase();
// //console.log('This is the answer to are you uncomfortable yet ' + uncomfortable);
// alert('Embrace the suck, buttercup!');

// if(uncomfortable === 'yes' || uncomfortable === 'y'){
//   alert('This is your new comfortable ' + userName + '!');
// }
// else if(uncomfortable === 'no' || uncomfortable === 'n'){
//   alert('Yes you are ' + userName);
// } else {
//   alert('That was a yes or no question, dude');
// }
// //Q4
// var areAfraid = prompt('Are you afraid?').toLowerCase();
// //console.log('this is the answer to are you afraid ' + areAfraid);
// alert('You must unlearn, what you have learned');

// if(areAfraid === 'yes' || areAfraid === 'y'){
//   alert('Fear is the path to the dark side ' + userName);
// }
// else if(areAfraid === 'no' || areAfraid === 'n'){
//   alert('You will be ' + userName);
// } else {
//   alert('Do or do not, there is no try');
// }
// //Q5
// var youReady = prompt(userName + ' are you ready for the next chapter in your life?').toLowerCase();
// // console.log('this is the answer to are you ready for the next chapter in your life ' + youReady);
// alert('This is the way ' + userName);

// if(youReady === 'yes' || youReady === 'y'){
//   alert('That\'s what I\'m talkin about ' + userName);
// }
// else if(youReady === 'no' || youReady === 'n'){
//   alert('Time to find some ambition ' + userName);
// } else {
//   alert('There\'s no way you will fail');
// }

// Q6 (Lab 3)
// Guess a number

var answerPets = 5;//Correct answer
var guessPets = prompt(userName + ' How many pets do you think I have?').trim();
console.log('this is the answer to how many pets do you think i have ' + guessPets);

for (var i = 0; i < 4; i++){
  if(guessPets === answerPets){
    alert('That\'s correct ' + userName + '! Congratulations!');
  } else if((guessPets) !== (answerPets) && (guessPets < answerPets) && i < 3){
    guessPets = prompt('Too low! You have ' + (3 - i) + ' lives left');
  } else if((guessPets) !== (answerPets) && (guessPets > answerPets)){
    guessPets = prompt('Too high! Guess again');
  } else {
    alert('Nope, sorry ' + userName + '! The correct answer is 5');
  }

}



