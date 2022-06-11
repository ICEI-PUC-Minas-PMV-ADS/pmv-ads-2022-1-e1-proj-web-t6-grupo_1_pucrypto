if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./login.html";
}

let userLogado = JSON.parse(localStorage.getItem("userLogado"));

let logado = document.querySelector("#logado");

logado.innerHTML = `Olá, ${userLogado.user}`;

function sair() {
  window.location.href = "./login.html";
  localStorage.removeItem("userLogado");
  localStorage.removeItem("token");
}
