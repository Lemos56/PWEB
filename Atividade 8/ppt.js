do {
    jogador = prompt("Digite pedra, papel ou tesoura:");
  if (jogador != "pedra" && "papel" && "tesoura")
  alert("Jogada inválida")

  
     num = Math.random();
     var maquina
 
     if (num >= 0 && num < 0.40) maquina = 'pedra'
     if (num >= 0.40 && num < 0.70) maquina = 'papel'
     if (num >= 0.70 && num < 1) maquina = 'tesoura'
 
     if (jogador == maquina) alert('Empate!')
 
     if (jogador == 'pedra' && maquina == 'tesoura') alert('Jogador ganhou')
 
     if (jogador == 'papel' && maquina == 'pedra') alert('Jogador ganhou')
 
     if (jogador == 'tesoura' && maquina == 'papel') alert('Jogador ganhou')
 
     if (jogador == 'tesoura' && maquina == 'pedra') alert('Maquina ganhou')
 
     if (jogador == 'pedra' && maquina == 'papel' ) alert('Maquina ganhou')
 
     if (jogador == 'papel' && maquina == 'tesoura') alert('Maquina ganhou')

    
 } while (jogador != 0)
 
