import { catalogo } from "./utilidades";

function abrirCarrinho(){
    document.getElementById("carrinho").classList.add("right-[0px]");
    document.getElementById("carrinho").classList.remove("right-[-360px]");
}

function fecharCarrinho(){
    document.getElementById("carrinho").classList.remove("right-[0px]");
    document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho(){
    const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
    const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

    
    botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
    botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);

}

export function AdicionarAoCarrinho(idProduto){
    const produto = catalogo.find(p => p.id == idProduto);/* recupera produto inteiro pelo id */
    const containerProdutosCarrinho =
    document.getElementById("produtos-carrinho");
    const cartaoProdutoCarrinho = 
    `<article class="flex bg-slate-100 rounded-lg relative " > 
    <button id="fechar-carrinho" ><i class="fa-solid fa-circle-xmark text-slate-500 absolute top-0 right-0 p-2  hover:text-slate-800 " ></i></button>
    <img src="./assets/img/${produto.imagem}" alt="${produto.nome}" class="h-24 rounded-lg p-1.5 " > 

    <div class="py-2" >
    <p class="text-slate-950 text-sm " >${produto.nome}</p>
    <p class="text-slate-400 text-sm " >Tamanho: P</p>
    <P class="text-green-700 text-lg " >$${produto.preco}</P>
    </div>
  </article>`
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho
}