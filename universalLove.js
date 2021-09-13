const loveSeason = {
    spring: 'Primavera',
    summer: 'Verão',
    autumn: 'Outono',
    winter: 'Inverno'
}

const loveData = [
    {location: loveSeason.autumn, season: 'Outono', name: 'Abóbora Dourada', origin: 'Véspera dos Espíritos', cureEffect: 'Não comestível', price: '🟡2.500 ouros', file: 'Golden_Pumpkin.png'},
    {location: loveSeason.autumn, season: 'Qualquer', name: 'Doce-Pedra Mágico', origin: 'Comerciante do Deserto\nRecompensa no Museu (90 itens)\nEspólio da Caveira Assombrada', cureEffect: '⛏ Mineração (+2)\n🎲 Sorte (+5)\n🥾 Velocidade (+1)', price: '🟡5.000 ouros', file: 'Magic_Rock_Candy.png'},
    {location: loveSeason.winter, season: 'Inverno', name: 'Pérola', origin: 'Mercado Noturno\nTesouro de Artefato\nPeixe-Bolha', cureEffect: 'Não comestível', price: '🟡2.500 ouros', file: 'Pearl.png'},

];







module.exports.findLove = (loveName) => {
    return loveData.find(love => love.name.includes(loveName));
}