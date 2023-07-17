

let inputAdultos = document.getElementById("adultos");
let inputCriacas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");


let resultado = document.getElementById("resultado");

function calcular() {

    let adutos = inputAdultos.value;
    let criancas = inputCriacas.value;
    let duracao = inputDuracao.value;


    let qrtTotalCarne = carnePP(duracao) * adutos + (carnePP(duracao) / 2 * criancas);
    let qrtTotalCerveja = cervejaPP(duracao) * adutos;
    let qrtTotaBebidas = bebidasPP(duracao) * adutos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qrtTotalCarne / 1000}kg de Carne </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qrtTotalCerveja / 355)} Latas de Cerveja </p>`;
    resultado.innerHTML += `<p>${Math.ceil(qrtTotaBebidas / 2000)} Pet´s 2L de Bebidas </P>`;
}


function carnePP(duracao) {

    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}
function cervejaPP(duracao) {

    if (duracao >= 6) {
        return 2600;
    }
    else {
        return 1200;
    }
}
function bebidasPP(duracao) {

    if (duracao >= 6) {
        return 1500;
    }
    else {
        return 1000;
    }
}