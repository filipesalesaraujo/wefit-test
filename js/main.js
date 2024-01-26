// 1 - Lista
var lista = document.querySelector('.list-group');

var quartoItem = document.createElement('li');
quartoItem.textContent = 'Quarto item';
quartoItem.className = 'list-group-item';

lista.appendChild(quartoItem);

var quintoItem = document.createElement('li');
quintoItem.textContent = 'Quinto item';
quintoItem.className = 'list-group-item';

lista.appendChild(quintoItem);

// 2 - Cards

var elementos = document.querySelectorAll('.col-lg-3');

var primeiro = elementos[0];
var segundo = elementos[1];
var terceiro = elementos[2];
var ultimo = elementos[elementos.length - 1];

var pai = primeiro.parentNode;

pai.removeChild(ultimo);

pai.insertBefore(ultimo, primeiro);

pai.removeChild(segundo);

pai.appendChild(segundo);

// 3 - Header

var jumbotron = document.querySelector('.jumbotron');

jumbotron.style.backgroundColor = '#6c757d';

jumbotron.style.textAlign = 'right';

jumbotron.style.color = 'white';

var botao = jumbotron.querySelector('.btn-primary.btn-lg');

botao.style.backgroundColor = 'green';

botao.style.color = 'white';
botao.style.borderColor = 'green';