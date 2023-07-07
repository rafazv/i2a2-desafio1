// Array de produtos
var products = [
  {
    id: 1,
    nome: "O Outro Lado da Meia-Noite",
    preco: 29.90,
    foto: "foto1.jpg"
  },
  {
    id: 2,
    nome: "Se Houver Amanhã",
    preco: 34.50,
    foto: "foto2.jpg"
  },
  {
    id: 3,
    nome: "A Ira dos Anjos",
    preco: 27.90,
    foto: "foto3.jpg"
  },
  {
    id: 4,
    nome: "Memórias da Meia-Noite",
    preco: 31.80,
    foto: "foto4.jpg"
  },
  {
    id: 5,
    nome: "O Reverso da Medalha",
    preco: 28.50,
    foto: "foto5.jpg"
  },
  {
    id: 6,
    nome: "O Plano Perfeito",
    preco: 33.70,
    foto: "foto6.jpg"
  },
  {
    id: 7,
    nome: "A Senhora do Jogo",
    preco: 25.60,
    foto: "foto7.jpg"
  },
  {
    id: 8,
    nome: "Nada Dura para Sempre",
    preco: 30.40,
    foto: "foto8.jpg"
  },
  {
    id: 9,
    nome: "Um Capricho dos Deuses",
    preco: 26.90,
    foto: "foto9.jpg"
  },
  {
    id: 10,
    nome: "O Céu Está Caindo",
    preco: 32.10,
    foto: "foto10.jpg"
  }
];

// Preenche a lista de produtos
var productList = document.getElementById("productList");

products.forEach(function(product) {
  var listItem = document.createElement("li");
  listItem.innerHTML = "ID: " + product.id + "<br>" +
                       "Nome: " + product.nome + "<br>" +
                       "Preço: R$ " + product.preco.toFixed(2) + "<br>" +
                       "<img src='" + product.foto + "'><br>";

  productList.appendChild(listItem);
});
