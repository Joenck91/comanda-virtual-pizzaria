import viewMenuBox from "./interface/view-menu.js";
import menuShowClose from "./buttons/menu-show-close.js";
import * as inputsContent from "./interface/inputs-contents.js"
import chooseSize from "./interface/choose-sizes.js";
import { showBorders, showDrinks, showFlavors, showsizes } from "./interface/inputs-contents.js";

//chooseSize();               //Define quantidade de sabores de acordo com o tamanho selecionado.


//Funções que precisam acessar json.
document.addEventListener('DOMContentLoaded', ()=>{
    // Faz uma requisição GET para a rota /api/menu para buscar os dados do cardápio.
    fetch('./data/menu.json')
    .then(res => res.json()) // Converte a resposta para JSON.
    .then(menu => {

        viewMenuBox(menu);  //Carrega menu.
        menuShowClose();    //Abre e fecha cardápio.
       
        // Preenche os selects onde aparecem sabores e bebidas para usuário escolher.
        inputsContent.showBorders(menu.borders);
        inputsContent.showsizes(menu.sizes);
        inputsContent.showFlavors(menu.pizzas);
        inputsContent.showDrinks(menu.drinks);  
    })
    .catch(err => console.error('Erro ao carregar menu:', err));// Captura e exibe no console qualquer erro ocorrido ao carregar o menu.
});