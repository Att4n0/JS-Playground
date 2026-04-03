
let altura;
let largura;

let campo = document.querySelector('h1');
campo.innerHTML = 'Clique em Console para área, Prompt para perimetro.';

function areaPerimetro(h, l, tipo) {
    let resultado;

    switch (tipo) {
        case 'area':
            resultado = h * l;
            break;
        case 'perimetro':
            resultado = 2 * h + 2 * l;
            break;
        default:
            console.error("Tipo não definido");
            return 0;
    }

    return resultado;
}

function entrada() {

    // '' -> 0
    // null -> 0

    // Primeiro compara se é NaN ou null -> se true, executa bloco
    // Se false, compara a segunda
    while (isNaN(altura) || altura === null || altura === 0) {
        var entradaAltura = prompt('Por favor insira apenas um número inteiro para a altura, em m (difernete de 0).');
        if (entradaAltura === null) {
            altura = null;
            break;
        }
        altura = Number(entradaAltura);
    }

    while (isNaN(largura) || largura === null || largura == 0) {
        var entradaLargura = prompt('Por favor insira apenas um número inteiro para a largura, em m (difernete de 0).');
        if (entradaLargura === null) {
            largura = null;
            break;
        }
        largura = Number(entradaLargura);
    }
}

function clear() {

    altura = null;
    largura = null;
}

function cliqueConsole() {

    entrada();

    if (altura !== null || largura !== null) {

        let fim = areaPerimetro(altura, largura, 'area');

        alert(`A área do retângulo inserido é igual a ${fim} metros quadrados.`);

        clear();
    }
}

function cliquePrompt() {

    entrada();

    if (altura !== null || largura !== null) {

        let fim = areaPerimetro(altura, largura, 'perimetro');

        alert(`O perímetro do retângulo inserido é igual a ${fim} metros.`);

        clear();
    }
}