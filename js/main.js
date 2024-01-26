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