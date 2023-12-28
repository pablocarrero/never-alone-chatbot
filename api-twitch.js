const dotenv = require('dotenv').config({ path: './.env' });

async function getCurrentStreamGame() {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=dinaamyc`,
      {
        headers: {
          'Client-ID': dotenv.parsed.BOT_TOKEN_ID,
          Authorization: `Bearer ${dotenv.parsed.BOT_TOKEN_AUTH}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].game_name;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

module.exports = { getCurrentStreamGame };
