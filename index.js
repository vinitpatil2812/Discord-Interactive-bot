const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

client.on('messageCreate', message => {
    if(message.author.bot) return;

    message.reply({
        content: "Hello, Scotch here!"
    });
});

client.on('interactionCreate', (interaction) => {
    interaction.reply("Command heard!");
});

client.login(); // bot auth token

