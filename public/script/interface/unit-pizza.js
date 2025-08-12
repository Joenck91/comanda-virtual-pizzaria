import chooseSize from "./choose-sizes.js";

const unitBox = document.querySelector('.command-pizza');
let pizzaCount = 1;
function unitPizza (id){
    const div_element = document.createElement('div');

    div_element.className = 'unit-pizza-box';
    div_element.innerHTML = `
                            <!-- Tamanho da pizza -->
                    <div class="size-pizza-box">
                        <h4>Tamanho</h4>
                        <div class="label-size-box pad-bot-10">
                            <label>
                                <input type="radio" name="size${id}" value="small" checked>
                                <p><strong>PEQUENA - R$35,00</strong></p>
                            </label>
                            <p class="pizza-features">25cm - 6 fatias - 2 sabores</p>

                            <label>
                                <input type="radio" name="size${id}" value="average">
                                <p><strong>MÉDIA - R$42,00</strong></p>
                            </label>
                            <p class="pizza-features">30cm - 8 fatias - 2 sabores</p>

                            <label>
                                <input type="radio" name="size${id}" value="large">
                                <p><strong>GRANDE - R$55,00</strong></p>
                            </label>
                            <p class="pizza-features">35cm - 12 fatias - 3 sabores</p>

                            <label>
                                <input type="radio" name="size${id}" value="giant">
                                <p><strong>GIGANTE - R$65,00</strong></p>
                            </label>
                            <p class="pizza-features">40cm - 16 fatias - 4 sabores</p>

                            <label>
                                <input type="radio" name="size${id}" value="king">
                                <p><strong>KING - R$85,00</strong></p>
                            </label>
                            <p class="pizza-features">45cm - 20 fatias - 4 sabores</p>
                        </div>
                    </div>

                    <!-- Sabores -->
                    <div id="choose-pizza-box" class="choose-pizza-box pad-bot-10">
                        <h4>Sabores</h4>
                        <label>
                            <input type="search" name="flavor_one" placeholder="Escolha o primeiro sabor">
                        </label>
                        <label>
                            <input type="search" name="flavor_two" placeholder="Escolha o segundo sabor">
                        </label>
                        <label>
                            <input style="display: none;" type="search" name="flavor_three"  class="flavor_three" placeholder="Escolha o terceiro sabor">
                        </label>
                        <label>
                            <input style="display: none;" type="search" name="flavor_four" class="flavor_four" placeholder="Escolha o quarto sabor">
                        </label>
                    </div>

                    <!-- Borda recheada -->
                    <div class="filling-box pad-bot-10">
                        <h4>Borda Recheada</h4>
                        <div class="border-pizza-box">
                            <label>
                                <input type="radio" name="border${id}" value="catupiry">
                                <p>Catupiry - R$8,00</p>
                            </label>
                            <label>
                                <input type="radio" name="border${id}" value="cheddar">
                                <p>Cheddar - R$8,00</p>
                            </label>
                            <label>
                                <input type="radio" name="border${id}" value="chocolatePreto">
                                <p>Chocolate Preto - R$9,00</p>
                            </label>
                            <label>
                                <input type="radio" name="border${id}" value="chocolateBranco">
                                <p>Chocolate Branco - R$9,00</p>
                            </label>
                            <label>
                                <input type="radio" name="border${id}" value="nenhum" checked>
                                <p>Nenhuma</p>
                            </label>
                        </div>
                    </div>
    `;

    return div_element;
};

export default function addPizza (){
    const boxUnitPizza = document.getElementById('add-pizza');

    boxUnitPizza.addEventListener('click', ()=>{
        pizzaCount++;
        unitBox.appendChild(unitPizza(pizzaCount));
        
    });
};


//adicionar e excluir

//as novas units não estão aumentando os sabores em tamanhos maiores