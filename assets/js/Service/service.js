const listaStarwars = () => {
    return fetch('http://localhost:3000/Starwars')
    .then(resposta => resposta.json())
}

const listaConsoles = () => {
    return fetch('http://localhost:3000/Consoles')
    .then(resposta => resposta.json())
}

const listaDiversos = () => {
    return fetch('http://localhost:3000/Diversos')
    .then(resposta => resposta.json())
}

const removeLista = (id, categoria) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
        method: 'DELETE'
    })
}

export const Cliente = {
    listaStarwars,
    listaConsoles,
    listaDiversos,
    removeLista
}