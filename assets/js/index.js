import { produtosHome } from './Controller/produtosHome.js';




const login = document.querySelector('[data-login]');
const home = document.querySelector('[data-home]');

login.addEventListener('click', () => {
    return location.href = '../login.html';
})

home.addEventListener('click', () => {
    location.href = '../../home.html';
})


produtosHome();
