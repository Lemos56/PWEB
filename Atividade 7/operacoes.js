function realizarOperacoes() {
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));

    if (isNaN(numero1) || isNaN(numero2)) {
        alert("Por favor, digite números válidos.");
        return;
    }

    let soma = numero1 + numero2;
    let subtracao = numero1 - numero2;
    let produto = numero1 * numero2;
    let divisao = numero1 / numero2;
    let resto = numero1 % numero2;

    alert(`Soma: ${soma}\nSubtração: ${subtracao}\nProduto: ${produto}\nDivisão: ${divisao}\nResto: ${resto}`);
}
