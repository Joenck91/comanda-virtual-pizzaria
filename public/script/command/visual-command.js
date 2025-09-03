import { getMenuMaps } from '/public/script/interface/menu-maps/menu-maps.js';


export async function displayPizzaOrder(pizzaAddItem) {
    const { sizeMap, borderMap, pizzasMap } = await getMenuMaps();

    let orderPizzaBox = document.getElementById('pizza-order-box');
    orderPizzaBox.innerHTML = ''; // Limpa o conteúdo existente

    pizzaAddItem.forEach((item) => {
        const pizzaDiv = document.createElement('div');
        pizzaDiv.classList.add('order-pizza');
        pizzaDiv.innerHTML = `
            <p><strong>Pizza:</strong> ${sizeMap[item.size]}</p>
            <p><strong>Borda:</strong> ${borderMap[item.border]}</p>
            <p><strong>Sabor(es):</strong> ${item.flavors.map(f => pizzasMap[f]).join(',<br>')}</p>
            <hr>
        `;
        orderPizzaBox.appendChild(pizzaDiv);
    });
}

export async function displayDrinkOrder(drinkAddItem) {
    const { drinkMap } = await getMenuMaps();

    let orderDrinkBox = document.getElementById('drink-order-box');
    orderDrinkBox.innerHTML = ''; // Limpa o conteúdo existente

    drinkAddItem.forEach((item) => {
        const drinkDiv = document.createElement('div');
        drinkDiv.classList.add('order-drink');
        drinkDiv.innerHTML = `
            <p><strong>Bebida:</strong> ${drinkMap[item.drink]}</p>
            <p><strong>Quantidade:</strong> ${item.units}</p>
            <hr>
        `;
        orderDrinkBox.appendChild(drinkDiv);
    });
}
