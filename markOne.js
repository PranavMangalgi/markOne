var readlineSync=require('readline-sync');
const playerName = readlineSync.question(`What is your name?`);

console.log(`Welcome ${playerName}! Let's play 'how well do you know me'`);
let score = 0;

let arrayQuestions = [{ question: `Where do i live?`, answer: "bangalore" }, { question: `What am I studying?`, answer: `engineering` }, { question: `What is my favourite snack?`, answer: `pizza` }, { question: 'what is my favourite hobby?', answer: 'coding' }, { question: `What do i do in my free time?`, answer: `play football` }]


play = (question, answer) => {
  let playerAnswer = prompt(question);
  if (playerAnswer === answer) {
    console.log(`Correct answer!`);
    score += 1;
  }
  else {
    console.log(`Wrong answer :(`);
  }
  console.log(`Current score: ${score}`);
  console.log(`______________`);
  if (score === 5) {
    console.log(`AWESOME! YOU GOT ALL THE 5 QUESTUONS RIGHT!`)
  }
}

for (let i of arrayQuestions) {
  play(i.question, i.answer);
}  
console.log(`YOUR FINAL SCORE IS: ${score} `);
