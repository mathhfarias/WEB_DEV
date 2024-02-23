const btn1 = document.queryselector('button')
//pega a lista de filmes
const listaFilmes = document.querySelector('#listaFilmes')
//cria o elemento li
const itemLista = document.createElement('li')
//pega o input 
const textoUsuario = document.querySelector('#filmeInput')

btn1.addEventListener('click',()=>{
    //adiciona um li a lista
    listaFilmes.append(itemLista)
    //adiciona o texto do input na lista 
    itemLista.innerHTML=textoUsuario.ariaValueMax
    //adiciona uma classe
    itemLista.classList.add(active)
    //muda o css 
    itemLista.style.backgroundColor = 'red' 

    
    
})