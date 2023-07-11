document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
      // Aqui você pode redirecionar para a página de produtos
      window.location.href = "produtos.html";
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  });
});
