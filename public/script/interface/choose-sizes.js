const radios = document.querySelectorAll('input[name="size"]'); //Armazena o tamanho das pizzas



//Função para exibir os sabores de acordo com a escolha do tamanho da pizza
function updateFlavor(size) {
    document.querySelector('.flavor_three').style.display = (size === 'large' || size === 'giant' || size === 'king') ? 'flex' : 'none';//Se o tamanho for medio e largo, aparece o terceiro sabor
    document.querySelector('.flavor_four').style.display = (size === 'giant' || size === 'king') ? 'flex' : 'none';//Se o tamanho for grande, aparece o quarto sabor.
}



//Toda vez que o cliente escolher um tamanho de pizza, verifique qual ele escolheu e crie s campos de sabores
export default function chooseSize(){
    //Para cada radio
    radios.forEach((radio) => {
        //...Adiciona um evento que escuta quando o valor do botão muda
        radio.addEventListener('change', () => {
        //Se esse botão de radio estiver selecionado
        if (radio.checked) {
            //Chama a função que atualiza a visibilidade dos sabores.
            updateFlavor(radio.value);
        }
        });
    });
};