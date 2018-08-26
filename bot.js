
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', (message) =>{
	function molestar(){
			message.channel.sendMessage('Danna empezá el Punpun.');
	}
	if(message.content == '!Punpun'){
			setInterval(molestar, 10000)
	}
	
	
	if(message.content == '!Prueba') {
			 message.channel.sendMessage('/tts puto el que escucha');
	}
	if(message.content == '!Togami') {
			 message.channel.sendMessage('Estudiante Heredero Definitivo');
	}
	if(message.content == '!Akane') {
			 message.channel.sendMessage('Estudiante Gimnasta Definitivo');
	}
	if(message.content == '!Owari') {
			 message.channel.sendMessage('Estudiante Gimnasta Definitivo');
	}
	if(message.content == '!Chiaki') {
			 message.channel.sendMessage('Estudiante Gamer™ Definitivo');
	}
 	if(message.content == '!Nanami') {
			 message.channel.sendMessage('Estudiante Gamer™ Definitivo');
	}
	if(message.content == '!Fuyuhiko') {
			 message.channel.sendMessage('Estudiante Gangster Definitivo');
	}
	if(message.content == '!Kuzuryuu') {
			 message.channel.sendMessage('Estudiante Gangster Definitivo');
	}
	if(message.content == '!Gundam') {
			 message.channel.sendMessage('Estudiante Cuidador Definitivo');
	}
	if(message.content == '!Tanaka') {
			 message.channel.sendMessage('Estudiante Cuidador Definitivo');
	}
	if(message.content == '!Hinata') {
			 message.channel.sendMessage('Estudiante ??? Definitivo');
	}
	if(message.content == '!Hajime') {
			 message.channel.sendMessage('Estudiante ??? Definitivo');
	}
	if(message.content == '!Hiyoko') {
			 message.channel.sendMessage('Estudiante Bailarina Tradicional Definitivo');
	}
	if(message.content == '!Saionji') {
			 message.channel.sendMessage('Estudiante Bailarina Tradicional Definitivo');
	}
	if(message.content == '!Ibuki') {
			 message.channel.sendMessage('Estudiante Musica Definitivo');
	}
	if(message.content == '!Mioda') {
			 message.channel.sendMessage('Estudiante Musica Definitivo');
	}
	if(message.content == '!Kazuichi') {
			 message.channel.sendMessage('Estudiante Mecánico Definitivo');
	}
	if(message.content == '!Mioda') {
			 message.channel.sendMessage('Estudiante Mecánico Definitivo');
	}
	if(message.content == '!Mahiru') {
			 message.channel.sendMessage('Estudiante Fotógrafa Definitivo');
	}
	if(message.content == '!Koizumi') {
			 message.channel.sendMessage('Estudiante Fotógrafa Definitivo');
	}
	if(message.content == '!Mikan') {
			 message.channel.sendMessage('Estudiante Enfermera Definitivo');
	}
	if(message.content == '!Tsumiki') {
			 message.channel.sendMessage('Estudiante Enfermera Definitivo');
	}
	if(message.content == '!Nagito') {
			 message.channel.sendMessage('Estudiante Suertudo Definitivo');
	}
	if(message.content == '!Komaeda') {
			 message.channel.sendMessage('Estudiante Suertudo Definitivo');
	}
	if(message.content == '!Nekomaru') {
			 message.channel.sendMessage('Estudiante Entrenador Definitivo');
	}
	if(message.content == '!Nidai') {
			 message.channel.sendMessage('Estudiante Entrenador Definitivo');
	}
	if(message.content == '!Peko') {
			 message.channel.sendMessage('Estudiante Espadachina Definitivo');
	}
	if(message.content == '!Pekoyama') {
			 message.channel.sendMessage('Estudiante Espadachina Definitivo');
	}
	if(message.content == '!Sonia') {
			 message.channel.sendMessage('Estudiante Princesa Definitivo');
	}
	if(message.content == '!Nevermind') {
			 message.channel.sendMessage('Estudiante Princesa Definitivo');
	}
	if(message.content == '!Teruteru') {
			 message.channel.sendMessage('Estudiante Cocinero Definitivo');
	}
	if(message.content == '!Hanamura') {
			 message.channel.sendMessage('Estudiante Cocinero Definitivo');
	}
	if(message.content == '!help') {
			 message.channel.sendMessage('Escribe el nombre o apellido del personaje empezando con mayusculas. Ej: !Sonia');
	}
});
client.login(process.env.BOT_TOKEN);
