import { produtosHome } from './Controller/produtosHome.js';

const login = document.querySelector('[data-login]');
const home = document.querySelector('[data-home]');
const formularioFooter = document.querySelector('[data-formulario-footer]');
const verConsoles = document.querySelector('[data-ver-consoles]');

verConsoles.addEventListener('click', () => {
    location.href = 'https://jef-rs.github.io/Challenge-AluraGeek/ver-consoles.html';
})

login.addEventListener('click', () => {
    return location.href = 'https://jef-rs.github.io/Challenge-AluraGeek/login.html';
})

home.addEventListener('click', () => {
    location.href = 'https://jef-rs.github.io/Challenge-AluraGeek/index.html';
})

produtosHome();
