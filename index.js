const { client } = require('./tmi.js');
const { getCurrentStreamGame } = require('./api-twitch.js');
const questions = require('./preguntas.json');

let handlerInterval;

async function askQuestions() {
  try {
    const gameName = await getCurrentStreamGame();
    const aleatoryIndex = Math.floor(Math.random() * 50);
    const question = questions[gameName][aleatoryIndex];

    sendQuestionToChat(question);
  } catch (error) {
    sendQuestionToChat('El streamer ha dejado de emitir...');
    handlerInterval = undefined;
    clearInterval(handlerInterval);
  }
}

function sendQuestionToChat(question) {
  client.say(`#dinaamyc`, question);
}

client.connect();

client.on('message', (channel, tags, message, self) => {
  // Ignore echoed messages.
  if (self) return;

  if (message.toLowerCase() === '!questions' && !handlerInterval) {
    // "@alca, heya!"
    handlerInterval = setInterval(askQuestions, 4000);
  }
  return;
});
