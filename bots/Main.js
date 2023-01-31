// Pretty Simple Bot which will only join Your SinglePlayer LAN world

const mineflayer = require('mineflayer');

// Connect to the Minecraft server
const bot = mineflayer.createBot({
  host: '<Your Private IP>',
  port: 1234, // Keep the port number same as on which your LAN Game server is running!
  username: 'Hello_world', // Just enter Any username you want... I guess spaces dont work (IDK)
  version: '1.18.1' // Version in which your LAN game is connected
});

// Wait for the bot to connect to the server
bot.once('login', () => {
  console.log('Bot connected to the server!');

  // Disconnect the bot from the server after 10 seconds
  setTimeout(() => {
    console.log('Disconnecting from the server...');
    bot.end();
  }, 10000);
});

bot.chat('Hello, world!');

// Handle any errors that occur while connecting to the server
bot.on('error', (err) => {
  console.error(`An error occurred: ${err.message}`);
});
