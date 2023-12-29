async function getCurrentStreamGame(bot_name, client_id, oaut_token) {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${bot_name}`,
      {
        headers: {
          'Client-ID': client_id,
          Authorization: `Bearer ${oaut_token}`,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data[0].game_name;
  } catch (error) {
    throw new Error(`El streamer ${bot_name} ha dejado de emitir...`);
  }
}

module.exports = { getCurrentStreamGame };
