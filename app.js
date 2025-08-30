// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();
  const listaAmigos = document.getElementById('listaAmigos');

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  if (amigos.includes(nombre)) {
    alert('Este nombre ya está en la lista.');
    return;
  }

  amigos.push(nombre);
  const li = document.createElement('li');
  li.textContent = nombre;
  li.setAttribute('role', 'listitem');
  listaAmigos.appendChild(li);
  input.value = '';
}

function sortearAmigo() {
  const resultadoLista = document.getElementById('resultado');

  if (amigos.length === 0) {
    alert('Añade al menos un amigo antes de sortear.');
    return;
  }

  resultadoLista.innerHTML = '';
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSeleccionado = amigos[indiceAleatorio];
  const li = document.createElement('li');
  li.textContent = `¡Amigo Secreto: ${amigoSeleccionado}!`;
  li.setAttribute('role', 'listitem');
  resultadoLista.appendChild(li);
}

document.getElementById('amigo').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    agregarAmigo();
  }
});