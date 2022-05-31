// MOSTRAR SENHA
let btn = document.querySelector("#verSenha");
let btnConfirm = document.querySelector("#verConfirmSenha");

btn.addEventListener("click", () => {
  let inputSenha = document.querySelector("#senha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

btnConfirm.addEventListener("click", () => {
  let inputSenha = document.querySelector("#confirmsenha");

  if (inputSenha.getAttribute("type") == "password") {
    inputSenha.setAttribute("type", "text");
  } else {
    inputSenha.setAttribute("type", "password");
  }
});

// VALIDAÇÃO DO FORMULÁRIO DE CADASTRO E LOCALSTORAGE
let nome = document.querySelector("#nome");
let labelNome = document.querySelector("#labelNome");
let validNome = false;

let cpf = document.querySelector("#cpf");
let labelCpf = document.querySelector("#labelCpf");
let validCpf = false;

let usuario = document.querySelector("#usuario");
let labelUsuario = document.querySelector("#labelUsuario");
let validUsuario = false;

let senha = document.querySelector("#senha");
let labelSenha = document.querySelector("#labelSenha");
let validSenha = false;

let confirmsenha = document.querySelector("#confirmsenha");
let labelConfirm = document.querySelector("#labelConfirm");
let validConfirmSenha = false;

let msgError = document.querySelector("#msgError");
let msgSuccess = document.querySelector("#msgSuccess");

nome.addEventListener("keyup", () => {
  if (nome.value.length <= 2) {
    labelNome.setAttribute("style", "color: red");
    labelNome.innerHTML = "Nome *Insira no mínimo 3 caracteres";
    nome.setAttribute("style", "border-color: red");
    validNome = false;
  } else {
    labelNome.setAttribute("style", "color: green");
    labelNome.innerHTML = "Nome";
    nome.setAttribute("style", "border-color: green");
    validNome = true;
  }
});

cpf.addEventListener("keyup", () => {
  if (cpf.value.length <= 10) {
    labelCpf.setAttribute("style", "color: red");
    labelCpf.innerHTML = "CPF *Números insuficientes";
    cpf.setAttribute("style", "border-color: red");
    validCpf = false;
  } else {
    labelCpf.setAttribute("style", "color: green");
    labelCpf.innerHTML = "CPF";
    cpf.setAttribute("style", "border-color: green");
    validCpf = true;
  }
});

usuario.addEventListener("keyup", () => {
  if (usuario.value.length <= 4) {
    labelUsuario.setAttribute("style", "color: red");
    labelUsuario.innerHTML = "Usuario *Insira no mínimo 5 caracteres";
    usuario.setAttribute("style", "border-color: red");
    validUsuario = false;
  } else {
    labelUsuario.setAttribute("style", "color: green");
    labelUsuario.innerHTML = "Usuário";
    usuario.setAttribute("style", "border-color: green");
    validUsuario = true;
  }
});

senha.addEventListener("keyup", () => {
  if (senha.value.length <= 5) {
    labelSenha.setAttribute("style", "color: red");
    labelSenha.innerHTML = "Senha *Insira no mínimo 6 caracteres";
    senha.setAttribute("style", "border-color: red");
    validSenha = false;
  } else {
    labelSenha.setAttribute("style", "color: green");
    labelSenha.innerHTML = "Senha";
    senha.setAttribute("style", "border-color: green");
    validSenha = true;
  }
});

confirmsenha.addEventListener("keyup", () => {
  if (senha.value != confirmsenha.value) {
    labelConfirm.setAttribute("style", "color: red");
    labelConfirm.innerHTML = "Confirmar Senha *As senhas não conferem";
    confirmsenha.setAttribute("style", "border-color: red");
    validConfirmSenha = false;
  } else {
    labelConfirm.setAttribute("style", "color: green");
    labelConfirm.innerHTML = "Confirmar Senha";
    confirmsenha.setAttribute("style", "border-color: green");
    validConfirmSenha = true;
  }
});

function cadastrar() {
  if (validNome && validCpf && validSenha && validConfirmSenha) {
    let listaUser = JSON.parse(localStorage.getItem("listaUser") || "[]");
    listaUser.push({
      nomeCad: nome.value,
      cpfCad: cpf.value,
      userCad: usuario.value,
      senhaCad: senha.value,
    });

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

    msgSuccess.setAttribute("style", "display: block");
    msgSuccess.innerHTML = "<strong>Cadastrando Usuário...</strong>";
    msgError.setAttribute("style", "display: none");
    msgError.innerHTML = "";

    setTimeout(() => {
      window.location.href = "./login.html";
    }, 3000);
  } else {
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML =
      "<strong>Preencha todos os campos corretamente antes de cadastrar</strong>";
    msgSuccess.setAttribute("style", "display: none");
    msgSuccess.innerHTML = "";
  }
}
