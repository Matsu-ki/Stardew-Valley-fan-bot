const Discord = require("discord.js")
const prefix = ".";

module.exports.run = (client,message) =>{
  var list =[
    "https://i.imgur.com/JKXiVrd.jpeg"
  ]
  var rand = list[Math.floor(Math.random() * list.length)];


    const newEmbed = new Discord.MessageEmbed()
      .setColor('#6A5ACD')
      .setImage(rand)
      .setThumbnail(client.user.displayAvatarURL({format:"png"}))
      .setTitle('`Amores, Gostos e Ódios Universais:`\n\n')
      .setDescription(
        `💙**Amores:**\n\nAbóbora Dourada\nFragmento Prismático\nRabbits foot\nPérola\nDoce-Pedra Mágico\n\n
        💌Gostos:
        `,
      )
      .setFooter(
        `Comando usado por: ${message.author.tag}`,
        message.author.displayAvatarURL(),
      )
      .setTimestamp();

    message.channel.send(newEmbed);
  }