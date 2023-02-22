const mineflayer = require('mineflayer');
const { pathfinder } = require('mineflayer-pathfinder')

const bot = mineflayer.createBot({
    host: '192.168.x.x', // Set you host's IP Address
    port: 4444, // Keep the port number same as on which your LAN Game server is running!
    username: 'CranFused' // Just enter Any username you want... I guess spaces dont work (IDK)
});

bot.loadPlugin(pathfinder)

// This Function will follow the player
function followPlayer() {
    const PlayerCI = bot.players['CranFused_'] // Name of the player which bot will follow

// If player is not in the world then it will give this error
    if (!playerCI) (
        bot.chat("I cant see CI!")
        return
    )
}

// Bot will send a message that Bot has joined the Game
bot.on('spawn', () => {
    console.log('Bot spawned in the game.');
});

