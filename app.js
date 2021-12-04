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