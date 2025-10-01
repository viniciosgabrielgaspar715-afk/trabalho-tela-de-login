// Seleciona os elementos
const campoNome = document.querySelector('input[type="text"]');
const campoSenha = document.querySelector('input[type="password"]');
const botaoEnviar = document.querySelector('button');

// Pop-up de campo vazio
botaoEnviar.addEventListener("click", (e) => {
  if (campoNome.value.trim() === "" || campoSenha.value.trim() === "") {
    alert("Preencha todos os campos antes de enviar!");
    e.preventDefault();
  } else {
    alert("Login realizado com sucesso!");
  }
});

// Botão para mostrar/ocultar senha
const botaoSenha = document.createElement("button");
botaoSenha.textContent = "Mostrar senha";
botaoSenha.style.marginTop = "10px";
campoSenha.insertAdjacentElement("afterend", botaoSenha);

botaoSenha.addEventListener("click", (e) => {
  e.preventDefault();
  if (campoSenha.type === "password") {
    campoSenha.type = "text";
    botaoSenha.textContent = "Ocultar senha";
  } else {
    campoSenha.type = "password";
    botaoSenha.textContent = "Mostrar senha";
  }
});

// Contador de tentativas de login
let tentativas = 0;

botaoEnviar.addEventListener("click", () => {
  tentativas++;
  alert("Número de tentativas: " + tentativas);
});
