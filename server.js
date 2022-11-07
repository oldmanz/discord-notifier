require('dotenv').config();
const schedule = require('node-schedule');


const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});

client.on('ready', client => {
  console.log(`Logged in as ${client.user.tag}!`);
});

var j = schedule.scheduleJob('30 19 * * 0,4', function () {
  client.channels.cache.get(process.env.CHANNEL_ID).send('Hangout time starts in 30 minutes!!   To stop receiving these messages, turn off notifications for the reminders channel');
  console.log('Sent Message!')
});
j.schedule()

// client.on("messageCreate", (message) => {
//   if (message.author.bot) return false; 
//   console.log(`${message}`) 
//   console.log(`Message from ${message.author.username}: ${message.content}`);
//   message.reply(`${message.content}!!!`);
// });

client.login(process.env.CLIENT_TOKEN);
