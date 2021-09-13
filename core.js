const Discord    = require("discord.js");
//const client     = new Discord.Client();
const fs = require("fs");
const config     = require("./config.json");

require('dotenv').config()
const Client = require('./src/structures/Client')

const client = new Client({
  intents: [
      'GUILDS',
      'GUILD_MESSAGE_REACTIONS',
      'GUILD_MESSAGES',
      'GUILD_INVITES',
      'GUILD_VOICE_STATES',
      'GUILD_MEMBERS',
      'GUILD_PRESENCES'
  ]
})

client.on("ready",()=>{

      let activities = [
        `Toda WIKI de Stardew Valley em apenas um bot!`,
        `Use ${config.prefix}help para ver meus comandos.`,
        `Veja minha documentação no github!`,
        `Developer: Matsu#1717`
      ],
      i = 0;
    setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
          type: "PLAYING"
        }), 1000 * 10); 
    client.user
        .setStatus("IDLE")
        .catch(console.error);
    console.log(`Logando com o bot ${client.user.tag}`);
});


  client.on('message', message => {
      if (message.author.bot) return;
      if (message.channel.type == 'dm') return;
      if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
      if (message.content.startsWith(`<@!${client.user.id}>) || message.content.startsWith(<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
      
  }
  
  });

client.on("message", message => {
    
    if(message.author.bot) return;
    if(message.channel.type == 'Stardew Valley')
    return;
    if(message.content == `<@${client.user.id}>` || message.content == `<@!${client.user.id}>`) {

  //  message.react('🇭')

    const valley = new Discord.MessageEmbed()


    .setColor("#8A2BE2")
    .setDescription('Use .help para saber os comandos da minha Wiki!')

    message.channel.send(valley)
    } 
    /*if(message.author.id === "758051140876238889") {
      message.react('🎅');
  }*/
 /* let embed = new Discord.MessageEmbed()

  .setDescription('lsgw.hyaxe.cloud:8888')
  .setColor("#000000")
  if(message.content === 'ip', 'IP', 'Ip'){
      
  message.reply(embed);

  }*/

});




client.login(config.token);