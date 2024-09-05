//Adicionar livros na biblioteca
let biblioteca = []
function adicionarLivro(titulo, autor, paginas, lido) {
    const livro = {
        titulo,
        autor,
        paginas,
        lido
    }
    biblioteca.push(livro)
}

console.log('MINHA BIBLIOTECA PESSOAL!')
adicionarLivro('O Enredo da Salvação', 'Bernardo Cho', 224, true)
adicionarLivro('Recriados pela Graça', 'Bernardo Cho', 208, false)
adicionarLivro('Manso e Humilde', 'Dane Ortlund', 224, false)
console.log(biblioteca)

//Exibir biblioteca
function exibirBiblioteca() {
    for (let livro of biblioteca) {
        console.log(`Titulo: ${livro.titulo}, Autor: ${livro.autor}, Páginas: ${livro.paginas}, Lido: ${livro.lido}`)
    }
}
exibirBiblioteca()

//Remover um livro
function removerLivro(titulo) {
    let novaBiblioteca = []
    for (let livro of biblioteca) {
        if (livro.titulo !== titulo) {
            novaBiblioteca.push(livro)
        }
    }
    biblioteca = novaBiblioteca
}
removerLivro('Recriados pela Graça')
console.log('BIBLIOTECA ATUALIZADA: ')
exibirBiblioteca()

//Marcar como lido
function marcarComoLido(titulo) {
    for (let livro of biblioteca) {
        if (livro.titulo === titulo) {
            livro.lido = true
        }
    }
}
marcarComoLido('Manso e Humilde')
console.log('LEITURAS ATUALIZADAS!!!')
exibirBiblioteca()