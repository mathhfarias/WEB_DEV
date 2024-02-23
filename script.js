const btn1 = document.queryselector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')
//cria o elemento li
const itemLista = document.createElement('li')

btn1.addEventListener('click',()=>{
    //adiciona um li a lista
    listaFilmes.append(itemLista)
    itemLista.innerHTML='<strong>Harry Potter</strong>'
    
})