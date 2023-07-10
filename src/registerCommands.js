import { REST, Routes } from 'discord.js';
import { TOKEN, CLIENT_ID } from '../utils/index.js';
const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

console.log('Token: ', TOKEN);
const rest = new REST({ version: '10' }).setToken(TOKEN);

try {
  console.log('Started regsitering the application (/) commads.');

  await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
  console.log('Hopefully registered!');
} catch (error) {
  console.error(error);
}
