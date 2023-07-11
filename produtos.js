// Array de produtos
var products = [
  {
    id: 1,
    nome: "Sombras da Noite",
    preco: 29.90,
    foto: "images/1.png",
    descricao: "Em meio às ruas escuras e perigosas de Nova York, um detetive solitário embarca em uma investigação complexa, mergulhando nas sombras da noite e enfrentando segredos sombrios."
  },
  {
    id: 2,
    nome: "A Dama de Vermelho",
    preco: 32.50,
    foto: "images/2.png",
    descricao: "Quando uma mulher misteriosa vestida de vermelho cruza o caminho de um detetive obstinado, ele se vê envolvido em uma rede de intrigas, romance e perigos inimagináveis."
  },
  {
    id: 3,
    nome: "Noite Sangrenta",
    preco: 28.90,
    foto: "images/3.png",
    descricao: "Em meio a crimes brutais e uma cidade mergulhada na violência, um policial implacável luta para desvendar uma série de assassinatos sangrentos que abalam as entranhas de Nova York."
  },
  {
    id: 4,
    nome: "O Mistério do Central Park",
    preco: 26.50,
    foto: "images/4.png",
    descricao: "Quando um corpo é descoberto no coração do Central Park, um detetive cético é forçado a mergulhar em uma trama repleta de segredos, corrupção e uma rede de intrigas que o leva às ruas perigosas de Nova York."
  },
  {
    id: 5,
    nome: "O Último Acorde",
    preco: 31.90,
    foto: "images/5.png",
    descricao: "Um pianista talentoso e carismático desaparece misteriosamente após uma apresentação de tirar o fôlego. Uma jovem e determinada repórter mergulha em uma investigação obscura para desvendar o enigma por trás do último acorde."
  },
  {
    id: 6,
    nome: "Coração em Chamas",
    preco: 34.50,
    foto: "images/6.png",
    descricao: "Em uma cidade onde o perigo espreita em cada esquina, um detetive destemido e uma mulher sedutora se unem para desvendar uma conspiração de incêndios criminosos e segredos do passado que ameaçam incendiar seus corações."
  },
  {
    id: 7,
    nome: "Sinfonia Mortal",
    preco: 29.90,
    foto: "images/7.png",
    descricao: "Quando assassinatos brutais abalam o mundo da música clássica em Nova York, uma detetive determinada mergulha em uma sinfonia mortal de segredos, rivalidades e traições."
  },
  {
    id: 8,
    nome: "A Trama das Sombras",
    preco: 27.50,
    foto: "images/8.png",
    descricao: "Uma trama diabólica envolvendo poderosos chefões do crime, policiais corruptos e uma femme fatale enigmática desafia a coragem de um detetive renegado enquanto ele luta para desvendar a trama das sombras que ameaça consumir a cidade."
  },
  {
    id: 9,
    nome: "Noite de Neon",
    preco: 25.90,
    foto: "images/9.png",
    descricao: "Em uma metrópole brilhante e cheia de vida, um detetive durão e uma garçonete destemida unem forças para enfrentar um submundo de crime, paixões proibidas e uma trama mortal que se desenrola sob a neon night de Nova York."
  },
  {
    id: 10,
    nome: "O Enigma da Broadway",
    preco: 30.50,
    foto: "images/10.png",
    descricao: "Quando um famoso produtor de teatro desaparece misteriosamente antes da grande estreia de uma peça de sucesso, um jovem e talentoso detetive mergulha no turbilhão da Broadway, enfrentando a miríade de personagens coloridos e os segredos sombrios que eles escondem."
  }
];


// Preenche a lista de produtos
var productList = document.getElementById("productList");

var currentIndex = 0;

function showNextProduct() {
  var product = products[currentIndex];

  var listItem = document.createElement("li");
  listItem.classList.add("product-item");

  listItem.innerHTML = "#" + product.id + "<br>" +
                       "<h3 class='product-title'>" + product.nome + "</h3>" +
                       "R$ " + product.preco.toFixed(2) + "<br>" +
                       "<p class='product-desc'>" + product.descricao + "</p>" +
                       "<img src='" + product.foto + "'><br>";

  productList.innerHTML = "";
  productList.appendChild(listItem);

  currentIndex++;
  if (currentIndex === products.length) {
    currentIndex = 0;
  }
}

// Exibe o primeiro produto
showNextProduct();

// Mostra cada elemento por 3 segundos e em seguida carrega o próximo
setInterval(showNextProduct, 3000);