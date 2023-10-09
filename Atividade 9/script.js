var idades = [];
var opinioesPessimo = 0;
var mulheres = 0;
var homens = 0;
var respostasColetadas = 0;

function processarResposta() {
  var idade = parseInt(document.getElementById("idade").value);
  var sexo = document.getElementById("sexo").value;
  var opiniao = parseInt(document.getElementById("opiniao").value);

  idades.push(idade);

  if (opiniao === 1) {
    opinioesPessimo++;
  }

  if (sexo === "feminino") {
    mulheres++;
  } else {
    homens++;
  }

  respostasColetadas++;

  if (respostasColetadas === 45) {
    exibirResultados();
  }
}

function calcularMediaIdade() {
  var somaIdades = idades.reduce(function (a, b) {
    return a + b;
  }, 0);
  return (somaIdades / idades.length).toFixed(2);
}

function calcularPorcentagemOtimoBom() {
  var otimoBomCount = 0;
  for (var i = 0; i < idades.length; i++) {
    if (idades[i] === 3 || idades[i] === 4) {
      otimoBomCount++;
    }
  }
  return ((otimoBomCount / idades.length) * 100).toFixed(2);
}

function exibirResultados() {
  var mediaIdade = calcularMediaIdade();
  var idadeMaisVelha = Math.max(...idades);
  var idadeMaisNova = Math.min(...idades);
  var porcentagemOtimoBom = calcularPorcentagemOtimoBom();

  alert(
    "Média da Idade: " +
      mediaIdade +
      "\nIdade da Pessoa Mais Velha: " +
      idadeMaisVelha +
      "\nIdade da Pessoa Mais Nova: " +
      idadeMaisNova +
      "\nQuantidade de Pessoas que Responderam Péssimo: " +
      opinioesPessimo +
      "\nPorcentagem de Pessoas que Responderam Ótimo e Bom: " +
      porcentagemOtimoBom +
      "%" +
      "\nNúmero de Mulheres: " +
      mulheres +
      "\nNúmero de Homens: " +
      homens
  );
}
