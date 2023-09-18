function calcularMedia() {
    let nome = prompt("Digite o nome do aluno:");
    let nota1 = parseFloat(prompt("Digite a primeira nota:"));
    let nota2 = parseFloat(prompt("Digite a segunda nota:"));
    let nota3 = parseFloat(prompt("Digite a terceira nota:"));

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert("Por favor, digite notas válidas.");
        return;
    }

    let media = (nota1 + nota2 + nota3) / 3;

    alert(`A média do aluno ${nome} é: ${media.toFixed(2)}`);
}
