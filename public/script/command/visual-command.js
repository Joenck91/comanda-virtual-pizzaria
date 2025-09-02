
function displayPizzaOrder(pizzaAddItem) {
    let orderPizzaBox = document.getElementById('pizza-order-box');
    orderPizzaBox.innerHTML = ''; // Limpa o conteúdo existente
    pizzaAddItem.forEach((item) => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('order-pizza');
        pizzaDiv.innerHTML = `
            <p><strong>Pizza:</strong> ${item.size}</p>
            <p><strong>Borda:</strong> ${item.border}</p>
            <p><strong>Sabor(es):</strong> ${item.flavors.join(',<br>')}</p>
            <hr>
        `;
        orderPizzaBox.appendChild(pizzaDiv);
    });
}

function displayDrinkOrder(drinkAddItem) {
    let orderDrinkBox = document.getElementById('drink-order-box');
    orderDrinkBox.innerHTML = ''; // Limpa o conteúdo existente
    drinkAddItem.forEach((item) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('order-drink');
        drinkDiv.innerHTML = `
            <p><strong>Bebida:</strong> ${item.drink}</p>
            <p><strong>Quantidade:</strong> ${item.units}</p>
            <hr>
        `;
        orderDrinkBox.appendChild(drinkDiv);
    });
}

export {displayPizzaOrder, displayDrinkOrder};