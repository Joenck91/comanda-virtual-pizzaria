// Array que guarda todos os pedidos da sessão
let pizzaAddItem = [];
let drinkAddItem = [];

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
        pizzaAddItem.push(pizzaOrder);
        console.log(pizzaAddItem);


        formPizza.reset();// Limpa o formulário após o envio
    });

    //Captura o envio do formulário de bebidas
    const formDrinks = document.querySelector('.command-drink');
    formDrinks.addEventListener('submit', (e) =>{
        e.preventDefault(); //evita reload da página
        //código aqui
        const drinkOrder = {
            bebida: formDrinks.drinks.value,
            quantidade: formDrinks.unitDrink.value
        };
        drinkAddItem.push(drinkOrder);
        console.log(drinkAddItem);


       formDrinks.reset();// Limpa o formulário após o envio
    });

};
