const sectionLivros = document.getElementById('livros')

const elementoLivrosDisponiveisValorTotal = document.getElementById('valor_total_livros_disponiveis')

function renderizarLivros(lista) {  
    elementoLivrosDisponiveisValorTotal.innerHTML = ''
    sectionLivros.innerHTML = ''
    lista.forEach(livro => {
    //let livrosDisponiveis = verificarDisponibilidade(livro)
    let livrosDisponiveis = livro.quantidade > 0 ? "livro__imagens" : "livro__imagens indisponivel"
    const divLivro = document.createElement('div')
    divLivro.className = 'livro'
    divLivro.innerHTML = `
        <div class="livro">
            <img class="${livrosDisponiveis}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>
    `
    sectionLivros.appendChild(divLivro);
    }
    )
 
}

/*function verificarDisponibilidade(livro) {
    if(livro.quantidade > 0){
        return "livro__imagens"
    } else {
        return "livro__imagens indisponivel"
    }
}*/