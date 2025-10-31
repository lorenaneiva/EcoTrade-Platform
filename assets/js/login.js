
function autenticarUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  // Recupera o usuário salvo
  const usuarioSalvo = JSON.parse(localStorage.getItem("usuarioEcoTrade"));

  // Verifica se o email e a senha estão corretos
  if (usuarioSalvo && usuarioSalvo.email === email && usuarioSalvo.senha === senha) {
    alert("Login bem-sucedido!");
    window.location.href = "index.html"; // redireciona para a home
  } else {
    alert("Email ou senha inválidos.");
  }
}

window.sr = ScrollReveal({reset : true });

sr.reveal('.footer-content', {
    duration: 2000,
    rotate: {x: 30, y: 0, z:0}
})
sr.reveal('.formulario', {
    duration: 2000,
    rotate: {x: 30, y: 0, z:0}
})
