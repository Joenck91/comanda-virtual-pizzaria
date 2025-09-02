// Array que guarda todos os pedidos da sessão
let notedOrder = [];

export default function writingOrder (menu){
    // Captura o envio do formulário de pizza
    const formPizza = document.querySelector('.unit-pizza-box');
    formPizza.addEventListener('submit', (e) => {
        e.preventDefault(); // evita reload da página
        //código aqui

        const pizzaOrder = {
            pizza: formPizza.size.value,
            borda: formPizza.border.value,
            sabores: [
                formPizza.flavor_one.value,
                formPizza.flavor_two.value,
                formPizza.flavor_three.value,
                formPizza.flavor_four.value
            ].filter(sabor => sabor), // Remove valores vazios
        };
        notedOrder.push(pizzaOrder);
        console.log(notedOrder);


    });

    //Captura o envio do formulário de bebidas
    const formDrinks = document.querySelector('.command-drink');
    formDrinks.addEventListener('submit', (e) =>{
        e.preventDefault(); //evita reload da página
        //código aqui
        console.log(formDrinks);
    });

};
