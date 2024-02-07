const botoes = document.querySelectorAll('.btn')
botoes.forEach(botao => botao.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value 
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : livros.filter(livro => 
        livro.categoria == categoria
    )
    if(categoria == 'todos') {
        renderizarLivros(livros)
    }else {
        renderizarLivros(livrosFiltrados)
    }    

    if(categoria== 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        console.log(valorTotal)
        exibirValorTotalLivrosDisponiveis(valorTotal)
    }
}

function exibirValorTotalLivrosDisponiveis(valorTotal) {
    elementoLivrosDisponiveisValorTotal.innerHTML = `<div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>`
}

function filtrarPorDisponibilidade() {
    return  livrosDisponiveis = livros.filter(livro => livro.quantidade > 0)

}

