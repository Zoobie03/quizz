/* const questions = [
*   {
*     question: "Qui est l'empereur de France le 2 décembre 1804 ?",
*     a: 'Clovis',
*     b: 'Abraham Lincoln',
*     c: 'Napoléon Bonaparte'
*   },
*   {
*     question: "Quelle est la date d'indépendance des États-Unis ?",
*     a: '4 juillet 1776',
*     b: '18 avril 1856',
*     c: '30 juin 1925'
*   },
*   {
*     question: "La chute de l'empire Romain se situe en ?",
*     a: '15 après J-C',
*     b: '395 après J-C',
*     c: '-740 avant J-C'
*   },
*   {
*     question: "Quelle est la capitale de la Slovénie ?",
*     a: 'Ljubljana',
*     b: 'Belgrade',
*     c: 'Bratislava'
*   },
*   {
*     question: "Combien d'habitants compte l'irland en 2020 ?",
*     a: '1.365 Million',
*     b: '21 Millions',
*     c: '4.9 Millions'
*   }
* ];
*/
// DOM elements
const inputs = document.getElementsByTagName('input');
const submit = document.getElementById('submitButton');
const reset = document.getElementById('resetButton');
const results = document.getElementById('result');
const questions = document.querySelectorAll('div.question');

// Variables
const correctAnswer = ['c','a','b','a','c'];
const emojis = ['✔️','✨','👀','😭','👎'];
let userAnswer = [];
let goodAnswer = 0;

// Function
const radioCheckedHandler = (userArray) => {
  // create array and push all checked inputs
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked === true) {
      userArray.push(inputs[i].value);
    }
  }
}

const checkAnswer = () => {
  // test the user answer with the correct answer arrays
  for (let i = 0; i < correctAnswer.length; i++) {
    if (userAnswer[i] === correctAnswer[i]) {
      // and if it's ok put the background color to lightgreen
      questions[i].style.backgroundColor = '#b6ff9b';
      goodAnswer++;
    } else {
      // if it's not, put the background to lightred
      questions[i].style.backgroundColor = '#f86464';
    }
  }
}

const resultDisplay = () => {
  // before display result, disable all inputs
  for (let y = 0; y < inputs.length; y++) {
    inputs[y].disabled = true;
  }
  // & the submit button
  submit.disabled = true;
  // for each case we have a different sentence's result
  switch(goodAnswer) {
    case 0:
      results.textContent = `Sans déconner ... ${goodAnswer}/5, pas d'emojis pour toi !`;
      break;
    case 1:
      results.textContent = "Fait un effort ... " + emojis[4];
      break;
    case 2:
      results.textContent = "Tu aurais pu mieux faire ... " + emojis[3];
      break;
    case 3:
      results.textContent = "Dommage il t'en manque deux ... " + emojis[2];
      break;
    case 4:
      results.textContent = "Pas mal, tu y était presque ... " + emojis[1];
      break;
    case 5:
      results.textContent = "Le sans-fautes, Bravo à toi ... " + emojis[0];
      break;
    default:
      results.textContent = "Il y a eu un problèmes avec le traitement du résultat";
  }
}

const waitReset = () => {
  // disable event on submit button
  submit.style.pointerEvents = "none";
  reset.classList.add('restart-animation');
}

const resetQuizz = () => {
  // reset all data
  goodAnswer = 0;
  userAnswer = [];
  // & put the background color of question to white
  for (let question of questions) {
    question.style.backgroundColor = 'white';
  }
  // & activate all input
  for (let y = 0; y < inputs.length; y++) {
    inputs[y].disabled = false;
  }
  // & active the submit button
  submit.disabled = false;
  // reset the result sentence
  results.textContent = "";
}