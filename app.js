function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];

    for (let i = 0; i < quantidade; i++) {
        let numeroSorteado = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numeroSorteado)){
            numeroSorteado = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numeroSorteado);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('reiniciar');
    if (botao.disabled) {
        botao.disabled = false;
    } else {
        botao.disabled = true;
    }
}