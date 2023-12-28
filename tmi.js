const tmi = require('tmi.js');
// const dotenv = require('dotenv').config({ path: './.env' });

const BOT_TOKEN_AUTH = process.env.BOT_TOKEN_AUTH;
const BOT_NAME = process.env.BOT_NAME;

const client = new tmi.Client({
  options: { debug: true },
  identity: {
    username: BOT_NAME,
    password: BOT_TOKEN_AUTH,
  },
  channels: [BOT_NAME],
});

client.connect();

function sendQuestionToChat(question) {
  client.say(`#${BOT_NAME}`, question);
}

module.exports = { sendQuestionToChat };
