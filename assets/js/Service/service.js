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

const editarProduto = (nome, preco, categoria, imagem, id, descricao) => {
    return fetch(`http://localhost:3000/${categoria}/${id}`, {
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
    return fetch(`http://localhost:3000/${categoria}`, {
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