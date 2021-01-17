let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    newItem = document.createElement('li'),
    addItem = menu.appendChild(newItem),
    newText = document.querySelector('.title'),
    adv = document.querySelector('.adv'),
    promptForApple = document.querySelector('#prompt');

addItem.classList.add('menu-item');
addItem.textContent = 'Пятый пункт';
menu.insertBefore(menuItem[2], menuItem[1]);
document.body.style.backgroundImage = "url('img/apple_true.jpg')";
newText.textContent = '"Мы продаем только подлинную технику Apple"';
adv.remove();
let yourOpinion = prompt("Ваше отношение к технике Apple?");
promptForApple.textContent = yourOpinion;