const Discord = require("discord.js")
const prefix = "r!";

module.exports.run = (client,message) =>{
  var list =[
    "https://i.imgur.com/ifUCFzu.jpeg"
  ]
  var rand = list[Math.floor(Math.random() * list.length)];


    const newEmbed = new Discord.MessageEmbed()
      .setColor('#0000CD')
      .setImage(rand)
      .setThumbnail(client.user.displayAvatarURL({format:"png"}))
      .setTitle('`STARDEW WIKI:`')
      .setDescription(
        `📢Veja alguns do comandos para diversão do homem mais inteligente do universo.\n
        `,
      )
      .setFooter(
        `Comando usado por: ${message.author.tag}`,
        message.author.displayAvatarURL(),
      )
      .setTimestamp();

    message.channel.send(newEmbed);
  }