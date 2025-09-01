// Array que guarda todos os pedidos da sessão
let notedOrder = [];

export default function writingOrder (menu){
    // Captura o envio do formulário de pizza
    const formPizza = document.querySelector('.unit-pizza-box');
    formPizza.addEventListener('submit', (e) => {
        e.preventDefault(); // evita reload da página
        //código aqui

        console.log(formPizza);


    });

    //Captura o envio do formulário de bebidas
    const formDrinks = document.querySelector('.command-drink');
    formDrinks.addEventListener('submit', (e) =>{
        e.preventDefault(); //evita reload da página
        //código aqui
        console.log(formDrinks);
    });

};
