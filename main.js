function calcularTara(){
    const tara = parseFloat(document.getElementById("tara").value);
    const qtdPeca = parseFloat(document.getElementById("qtdPeca").value);
    const pesoBalanca = parseFloat(document.getElementById("pesoBalanca").value);

    const resultado = (((tara/1000) * qtdPeca) - pesoBalanca) * -1;

    if (isNaN(tara) || isNaN(qtdPeca) || isNaN(pesoBalanca)) {
        document.getElementById("resultado").innerText = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    document.getElementById("resultado").innerText = resultado.toFixed(2);
}