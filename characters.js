  
const characterLocations = {
    valley: 'Vila Pelicanos',
    blacksmith: 'Ferreiro',
    clinic: 'Clínica do Harvey',
    joja: 'Mercado Joja',
    museum: 'Museu',
    storage: 'Armazém do Pierre',
    sewer: 'Os Esgotos',
    fishmonger: 'Peixaria',
    gengibre: 'Ilha Gengibre',
    desert: 'O deserto',
    motain: 'A montanha',
    mines: 'As Minas',
    beach: 'A praia',
    idk: 'Desconhecido',
    witch: 'Cabana da Bruxa',
    florest: 'Floresta Cinzaseiva'
};

const characterData = [
    {location: characterLocations.valley, name: 'Alex', niver: 'Verão: Dia 13', family: 'George (avô) e Evelyn (avó)', friend: 'Haley', toMarry: 'Casável: Sim', bGifts: 'Café da manhã completo e Jantar de Salmão', address: 'Estrada do Rio, nº 1', file: 'Alex.png'},
    {location: characterLocations.valley, name: 'Abigail', niver: 'Outono: Dia 13', family: 'Pierre (pai) e Caroline (mãe)', friend: 'Sebastian e Sam', toMarry: 'Casável: Sim', bGifts: 'Abóbora, Ametista, Baiacu, Bolo de chocolate, Enguia picante, Mexido de amoras', address: 'Armazém do Pierre', file: 'Abigail.png'},
    {location: characterLocations.gengibre, name: 'Birdie', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Cabana na Região Oeste', file: 'Birdie.png'},
    {location: characterLocations.desert, name: 'Bouncer', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Oásis', file: 'Bouncer.png'},
    {location: characterLocations.valley, name: 'Caroline', niver: 'Inverno: 7', family: 'Pierre (marido) e Abigail (filha)', friend: 'Jodi', toMarry: 'Casável: Não', bGifts: 'Chá verde, Flor-Miçanga, Taco de peixe', address:'Armazém do Pierre', file: 'Caroline.png'},
    {location: characterLocations.valley, name: 'Clint', niver: 'Inverno: 16', family: 'N/A', friend: 'Emily', toMarry: 'Casável: Não', bGifts: 'Água-marinha,  Ametista, Barra de irídio, Barra de ouro, Esmeralda, Jade, Molho de alcachofra, Omnigeodo, Risoto de samambaia, Rubi e Topázio', address:'Ferreiro', file: 'Clint.png'},
    {location: characterLocations.motain, name: 'Demetrius', niver: 'Verão: 19', family: 'Robin (esposa), Maru (filha) e Sebastian (enteado)', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'Morango, Pote de Feijão, Pudim de Arroz e Sorvete', address:'Rua da Montanha, nº 24', file: 'Demetrius.png'},
    {location: characterLocations.mines, name: 'Dwarf', niver: 'Verão: 22', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'Água-marinha, Ametista, Esmeralda, Jade, Omnigeodo, Rubi, Topázio e Pedra de Limão', address:'Caverna Oriental', file: 'Dwarf.png'},
    {location: characterLocations.beach, name: 'Elliott', niver: 'Outono: 5', family: 'N/A', friend: 'Willy e Leah', toMarry: 'Casável: Sim', bGifts: 'Bolinhos de Caranguejo, Lagosta, Romã, Pena de Pato, Sopa Tom Kha', address:'Cabana do Eliott', file: 'Elliott.png'},
    {location: characterLocations.valley, name: 'Emily', niver: 'Primavera: 27', family: 'Haley (irmã)', friend: 'Sandy', toMarry: 'Casável: Sim', bGifts: 'Água-marinha, Ametista, Esmeralda, Hambúrguer de sobreviência, Jade , Lã, Rubi, Tecido, Topázio', address:'Rua do Salgueiro, nº 2', file: 'Emily.png'},
    {location: characterLocations.valley, name: 'Evelyn', niver: 'Inverno: 20', family: 'George (marido) e Alex (neto)', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'Beterraba, Bolo de chocolate, Diamante, Recheio, Rosa-de-fada e Tulipa', address:'Estrada do Rio, nº 1', file: 'Evelyn.png'},
    {location: characterLocations.valley, name: 'George', niver: 'Outono: 24', family: 'Evelyn (esposa) e Alex (neto)', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'Alho-poró e Cogumelo frito', address:'Estrada do Rio, nº 1', file: 'George.png'},
    {location: characterLocations.valley, name: 'Gil', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Estrada do Rio, nº 1', file: 'Gil.png'},
    {location: characterLocations.idk, name: 'Governor', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Desconhecido', file: 'Governor.png'},
    {location: characterLocations.idk, name: 'Grandpa', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Outro lado da vida', file: 'Grandpa.png'},
    {location: characterLocations.valley, name: 'Gunther', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'N/A', address:'Museu', file: 'Gunther.png'},
    {location: characterLocations.valley, name: 'Gus', niver: 'Verão: 8', family: 'N/A', friend: 'Pam', toMarry: 'Casável: Não', bGifts: 'Laranja, Escargô, Diamante, Taco de Peixe', address:'Salão', file: 'Gus.png'},
    {location: characterLocations.valley, name: 'Haley', niver: 'Primavera: 14', family: 'Emily (irmã)', friend: 'Alex', toMarry: 'Casável: Sim', bGifts: 'Coco, Bolo rosa, Girassol, Salada de frutas', address:'Rua do Salgueiro, nº 2', file: 'Haley.png'},
    {location: characterLocations.valley, name: 'Harvey', niver: 'Inverno: 14', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Sim', bGifts: 'Café, Picles, Óleo de frutas, Superprato e Vinho', address:'Clínica do Harvey', file: 'Harvey.png'},
    {location: characterLocations.valley, name: 'Harvey', niver: 'Inverno: 14', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Sim', bGifts: 'Café, Picles, Óleo de frutas, Superprato e Vinho', address:'Clínica do Harvey', file: 'Harvey.png'},
    {location: characterLocations.witch, name: 'Ajudante', niver: 'Desconhecido', family: 'N/A', friend: 'N/A', toMarry: 'Casável: Não', bGifts: 'Maionese nula', address:'Desconhecido', file: 'Henchman_Portrait_1.png'},
    {location: characterLocations.florest, name: 'Jas', niver: 'Verão: 4', family: 'Marnie (tia) e Shane (padrinho)', friend: 'Leo e Vicent', toMarry: 'Casável: Não', bGifts: 'Bolo rosa, Flor-de-fada e Pudim de ameixas', address:'Rancho da Marnie', file: 'Jas.png'},

    // {location: characterLocations.valley, name: 'Matsu', file: 'thumb-108886.gif'},


];

module.exports.findCharacter = (characterName) => {
    return characterData.find(character => character.name.includes(characterName));
}