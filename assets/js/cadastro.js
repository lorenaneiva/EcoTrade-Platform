function salvarUsuario() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const confirmarSenha = document.getElementById("confirmarSenha").value;
  const cpf = document.getElementById("cpf").value;

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem.");
    return;
  }

  const usuario = { email, cpf, senha, comfirmarSenha };
  localStorage.setItem("usuarioEcoTrade", JSON.stringify(usuario));

  alert("Usuário cadastrado com sucesso!");
  console.log("Redirecionando para login");
  window.location.href ="login.html";
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
