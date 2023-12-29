const { sendQuestionToChat } = require('./tmi.js');
const { getCurrentStreamGame } = require('./api-twitch.js');
const questions = require('./preguntas.json');

async function askQuestions() {
  try {
    const gameName = await getCurrentStreamGame();
    const aleatoryIndex = Math.floor(Math.random() * 50);
    const question = questions[gameName][aleatoryIndex];

    sendQuestionToChat(question);
  } catch (error) {
    sendQuestionToChat('El streamer ha dejado de emitir...');
    clearInterval(handlerInterval);
  }
}

// Establecer intervalo para hacer preguntas cada 7 minutos (en milisegundos)
const handlerInterval = setInterval(askQuestions, 360000);
