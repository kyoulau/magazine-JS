import { AdicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo(){
    for (const produtoCatalogo of catalogo){

        const cartaoProduto = `<div class=" w-48 m-2 flex flex-col p-2 justify-between group  my-3 shadow-xl shadow-slate-400 rounded-lg " id="card-produto-${produtoCatalogo.id}" >
        <img src="./assets/img/${produtoCatalogo.imagem}" class="group-hover:scale-110 duration-300 my-3 rounded-lg  "  >
        <p class=" text-sm " >${produtoCatalogo.marca}</p>
        <p class=" text-sm " >${produtoCatalogo.nome}</p>
        <p class=" text-sm ">$ ${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class="bg-slate-900 text-slate-200 hover:bg-slate-700 " ><i class="fa-solid fa-cart-plus "></i></button>
        </div>`;
    
    document.getElementById("container-produto").innerHTML += cartaoProduto;
    
    
    }
    for(const produtoCatalogo of catalogo){
        document
        .getElementById(`adicionar-${produtoCatalogo.id}`)
        .addEventListener("click",() => AdicionarAoCarrinho(produtoCatalogo.id));
    }
}
