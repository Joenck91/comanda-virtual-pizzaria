import totalFixed from "./interface/total-fixed.js";
import viewMenuBox from "./interface/view-menu.js";

//Função que fixe a etiqueta total no topo da tela
totalFixed();

//Funções que precisam acessar json
document.addEventListener('DOMContentLoaded', ()=>{
    // Faz uma requisição GET para a rota /api/menu para buscar os dados do cardápio
    fetch('./data/menu.json')
    .then(res => res.json()) // Converte a resposta para JSON
    .then(menu => {

        viewMenuBox(menu);   //Carrega menu
       
  
    })
    .catch(err => console.error('Erro ao carregar menu:', err));



});