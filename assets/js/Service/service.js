const listaStarwars = () => {
    return fetch('https://jef-rs.github.io/Challenge-AluraGeek/Starwars.json')
    .then(resposta => resposta.json())
}

const listaConsoles = () => {
    return fetch('https://jef-rs.github.io/Challenge-AluraGeek/Consoles.json')
    .then(resposta => resposta.json())
}

const listaDiversos = () => {
    return fetch('https://jef-rs.github.io/Challenge-AluraGeek/Diversos.json')
    .then(resposta => resposta.json())
}


const removeLista = (id, categoria) => {
    return fetch(`https://jef-rs.github.io/Challenge-AluraGeek/${categoria}.json/${id}`, {
        method: 'DELETE'
    })
}

const editarProduto = (nome, preco, categoria, imagem, id, descricao) => {
    return fetch(`https://jef-rs.github.io/Challenge-AluraGeek/${categoria}.json/${id}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            preco: preco,
            imagem: imagem,
            categoria: categoria,
            descricao: descricao
        })
    })
    .then( resposta => {
        return resposta.json()
    })
}

const criarProduto = (imagem, nome, preco, descricao, categoria) => {
    return fetch(`https://jef-rs.github.io/Challenge-AluraGeek/${categoria}.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            preco: preco,
            descricao: descricao,
            categoria: categoria
        })
    })
    .then(resposta => {
        return resposta.body
    })
}

export const Cliente = {
    listaStarwars,
    listaConsoles,
    listaDiversos,
    removeLista,
    editarProduto,
    criarProduto
}