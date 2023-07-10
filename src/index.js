import { Client, Events, GatewayIntentBits } from 'discord.js';

// Load .env here
import { config } from 'dotenv';
import { databases } from '../plugin/appwriteConnection.js';
import { ID } from 'node-appwrite';
config();

const token = process.env.tokenFuzzy;

// create client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.on('interactionCreate', async (interaction) => {
  console.log('here');
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

// Interaction is here!

client.on('messageCreate', (message) => {
  if (!message.author.bot && message.content.startsWith('!remind')) {
    const messageArr = message.content.split(' ').splice(1).join(' ');

    const data = {
      updateName: messageArr,
      updateDescription: 'This is a test',
      updateTime: new Date(Date.now() + 1000 * 60 * 300),
    };
    databases.createDocument(
      '64ab3c7577794df81324',
      '64ab3c83c3f8b34f1ec9',
      ID.unique(),
      data
    );
    console.log(messageArr);
  }
});

client.on('ready', () => {
  console.log('Update me is up!');
});

// await client.login(token);
// const trigger = new Date(Date.now() + 1000 * 2);

// const task = new Task('test', 'test desc');
// console.log(task.getTime);
