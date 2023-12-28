const { sendQuestionToChat } = require('./tmi.js');
const { getCurrentStreamGame } = require('./api-twitch.js');
const questions = require('./preguntas.json');

async function askQuestions() {
  try {
    const gameName = await getCurrentStreamGame();
    const aleatoryIndex = Math.floor(Math.random() * 50);
    const questionF = questions[gameName][aleatoryIndex];

    sendQuestionToChat(questionF);
  } catch (error) {
    sendQuestionToChat('No se ha podido obtener una pregunta...');
  }
}

// Establecer intervalo para hacer preguntas cada 10 minutos (en milisegundos)
setInterval(askQuestions, 5000);
