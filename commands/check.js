const discord = require('discord.js');
const characters = require('./../characters.js');
const { commandPrefix } = require('./../config.js');

module.exports.run = async (client, message, params) => {
    if(message.channel == message.author.dmChannel) {
        return;
    }

    if(params.length) {
        const data = characters.findCharacter(params);

        if(typeof data !== 'undefined') {
            const embed = new discord.MessageEmbed();

            embed.setTitle(`Pequenas informações sobre: ${data.name}.`)
                .setColor('#00BFFF')
                .addField('Nome', data.name, true)
                .addField('Localização', data.location, true)
                .addField('Aniversário', data.niver, true)
                .addField('Familiares', data.family, true)
                .addField('Amigos', data.friend, true)
                .addField('Casamento', data.toMarry, true)
                .addField('Melhores presentes', data.bGifts, true)
                .addField('Endereço', data.address, true)
                .attachFiles(`./assets/characters/${data.file}`)
                .setThumbnail(`attachment://${data.file}`);

            message.channel.send(embed)
                .catch(error => console.log(error));

        }
        else {
            const notFound = new discord.MessageEmbed()

            .setColor("#FF6347")
            .setDescription("Personagem não encontrado, veja se digitou de forma correta. EX: Alex, Lewis, Pierre...")
            message.channel.send(notFound)
                .catch(error => console.log(error));
        }
    }
    else {
        message.channel.send(`${this.config.usage}\n${this.config.desc}`)
            .catch(error => console.log(error));
    }

  /*  const gostos = new discord.MessageEmbed()

            .setColor("00FF7F")
            .setDescription('Deseja saber sobre os Amores, Gostos e Ódios Universais? Use .universal !')
                
    message.channel.send(gostos);*/

}


module.exports.config = {
    commandName: 'check',
    usage: `Syntax: ${commandPrefix}check [Nome do personagem]`,
    desc: `Description: Mostra algumas informações do personagem.`
};