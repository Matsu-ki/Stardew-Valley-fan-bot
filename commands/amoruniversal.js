const discord = require('discord.js');
const loveData = require('../universalLove.js');
const { commandPrefix } = require('../config.js');

module.exports.run = async (client, message, params) => {
    if(message.channel == message.author.dmChannel) {
        return;
    }

    if(params.length) {
        const data = loveData.findLove(params);

        if(typeof data !== 'undefined') {
            const embed = new discord.MessageEmbed();

            embed.setTitle(`Amores Universais: ${data.name}.`)
                .setColor('#00BFFF')
                .addField('Nome', data.name, true)
                .addField('Origem', data.origin, true)
                .addField('Efeitos', data.cureEffect, true)
                .addField('Preço', data.price, true)
                .attachFiles(`./assets/universalLove/${data.file}`)
                .setThumbnail(`attachment://${data.file}`);

            message.channel.send(embed)
                .catch(error => console.log(error));

        }
        else {
            const notFound = new discord.MessageEmbed()

            .setColor("#FF6347")
            .setDescription("Isto não é um amor universal. Amores Universais: Abóbora Dourada, Fragmento Prismático, Rabbits foot, Pérola e Doce-Pedra Mágico.")
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
    commandName: 'amoruniversal',
    usage: `Syntax: ${commandPrefix}amoruniversal [Nome do Objeto/Comida]`,
    desc: `Description: Mostra algumas informações do comando.`
};