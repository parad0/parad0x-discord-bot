# Coded by parad0x
## THIS IS ENTIRELY EDITABLE TO YOUR DESIRE ##
## REPLACE 'TOKEN' in var token to your bot's token ##

const Discord = require('discord.js');
const client = new Discord.Client();

const PREFIX = '.';

var token = 'TOKEN';

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'hi') {
    msg.reply('Hello!');
  }
});

client.on('message', msg => {
	if (msg.content === 'bye') {
		msg.reply("I'll miss you... stay safe :((")
	}
})


client.on('message', message => {

	let args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0]){
		case 'info':
			if(args[1] == 'version'){
				message.channel.sendMessage(' Version: 1.0.0 (coded by parad0x)');
			}else{	
				message.channel.sendMessage('**ERROR! Please use an extended prefix.**\nExample: *.info version*')
			}
			break;

		case 'clear':
			if(!args[1]) return message.reply('ERROR! Please define second arg\nExample: !clear 5 - bulk deletes 5 messages from current channel.')
			message.channel.bulkDelete(args[1]);
			break;
		case 'help':
			if(args[1] == 'list'){
				message.channel.sendMessage('**Following are available commands to use:**\n```!info version``` retrieves current bot version\n```!owner``` tells you the creator of the bot\n```!clear``` bulk deletes messages.');
			}else{
				message.channel.sendMessage('Please use the prefix .help list for a list of available commands.')
			}
}				
})

client.on('message', message => {
	let args = message.content.substring(PREFIX.length).split(" ");

	switch(args[0]){
		case 'owner':
		{
			message.channel.sendMessage("Coded by ```parad0x```")
		}
	}
})

client.on('guildMemberAdd', member =>{
	const channel = member.guild.channels.find(channel => channel.name === "general");
	if(!channel) return;
	channel.send(`parad0x has summoned ${member}!`);
	}
);


client.login(token)
