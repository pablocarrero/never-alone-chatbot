const tmi = require('tmi.js');
const { getCurrentStreamGame } = require('./api-twitch.js');
const questions = require('./preguntas.json');
require('dotenv').config();

let handlerInterval;
let envs = {};
const requiredConfig = ['OAUTH_ACCESS_TOKEN', 'OAUTH_CLIENT_ID', 'BOT_NAME'];

// Load config.json variables to connections
loadConfigFile();

// Create connection and listen to message events
const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: envs.BOT_NAME,
    password: envs.OAUTH_ACCESS_TOKEN,
  },
  channels: [envs.BOT_NAME],
});

client.connect();

client.on('message', handleMessageCallback);

async function askQuestions() {
  try {
    const gameName = await getCurrentStreamGame(
      envs.BOT_NAME,
      envs.OAUTH_CLIENT_ID,
      envs.OAUTH_ACCESS_TOKEN
    );

    const aleatoryIndex = Math.floor(Math.random() * 50);
    const question = generateQuestionFromSet(gameName, aleatoryIndex);

    sendQuestionToChat(question);
  } catch (error) {
    sendQuestionToChat('El streamer ha dejado de emitir...');
    clearInterval(handlerInterval);
  }
}

function loadConfigFile() {
  if (process.env.NODE_ENV === 'development') {
    const config = require('./config.json');

    for (let configVariable of requiredConfig) {
      if (!config[configVariable]) {
        console.error(
          `No se ha encontrado una configuracion valida para ${configVariable}, revisa tu archivo config.json`
        );
        process.exit(1);
      }
      envs = config;
    }
    console.log(envs);
  } else {
    envs['OAUTH_CLIENT_ID'] = process.env.OAUTH_CLIENT_ID;
    envs['OAUTH_ACCESS_TOKEN'] = process.env.OAUTH_ACCESS_TOKEN;
    envs['BOT_NAME'] = process.env.OAUTH_ACCESS_TOKEN;
    envs['BOT_COMMAND'] = process.env.BOT_COMMAND;
  }
}

function handleMessageCallback(channel, tags, message, self) {
  // Ignore echoed messages.
  if (self) return;

  if (
    message.toLowerCase() === `!${envs.BOT_COMMAND}` &&
    tags.username === envs.BOT_NAME
  ) {
    // "@alca, heya!"
    handlerInterval = setInterval(askQuestions, 3000);
  }
  return;
}
function generateQuestionFromSet(gameName, randomIndex) {
  return questions[gameName][randomIndex];
}

function sendQuestionToChat(question) {
  client.say(`#${envs.BOT_NAME}`, question);
}
