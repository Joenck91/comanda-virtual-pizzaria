import totalFixed from "./interface/total-fixed.js";
import viewMenuBox from "./interface/view-menu.js";
import menuShowClose from "./buttons/menu-show-close.js";
import chooseSize from "./interface/choose-sizes.js";
import unitPizza from "./interface/unit-pizza.js";


//totalFixed();               //Fixa a etiqueta total no topo da tela.
chooseSize();               //Define quantidade de sabores de acordo com o tamanho selecionado.
//unitPizza();                //Insere ou remove mais pizzas.

//Funções que precisam acessar json.
document.addEventListener('DOMContentLoaded', ()=>{
    // Faz uma requisição GET para a rota /api/menu para buscar os dados do cardápio.
    fetch('./data/menu.json')
    .then(res => res.json()) // Converte a resposta para JSON.
    .then(menu => {

        viewMenuBox(menu);  //Carrega menu.
        menuShowClose();    //Abre e fecha cardápio.
       
  
    })
    .catch(err => console.error('Erro ao carregar menu:', err));// Captura e exibe no console qualquer erro ocorrido ao carregar o menu.
});