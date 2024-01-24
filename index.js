const { Client } = require('discord.js');
const client = new Client({ intents: 131071 });

client.once('ready', async () => {
		console.log('Bot is online!');
		const commands = await client.application.commands.fetch();
		commands.forEach((command) => {
				client.application.commands.delete(command.id);
		});

		console.log('All slash commands cleaned!');
        process.exit(0);
});

client.login('bot_token');