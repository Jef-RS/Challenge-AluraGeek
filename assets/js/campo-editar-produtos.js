import { editaProduto } from "./Controller/editarProdutos.js";

const home = document.querySelector('[data-home]');

home.addEventListener('click', () => {
    location.href = 'https://jef-rs.github.io/Challenge-AluraGeek/index.html';
})

editaProduto();