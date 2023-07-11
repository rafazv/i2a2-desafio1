document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("forgotPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;

    if (email) {
      // Simulando envio do link de redefinição para o email
      alert("Um link para redefinição de senha foi enviado para o email informado: " + email);
      
      // Redirecionando para a página de login
      window.location.href = "login.html";
    } else {
      alert("Por favor, informe um email válido.");
    }
  });
});