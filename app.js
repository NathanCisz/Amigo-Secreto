//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome);
  input.value = "";
  atualizarLista();
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    alert("A lista está vazia. Adicione pelo menos um nome.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[indice];

  resultado.innerHTML = `<li>🎉 O amigo secreto sorteado foi: <strong>${nomeSorteado}</strong></li>`;
}
