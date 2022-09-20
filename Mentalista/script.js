var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 3;
var errou;
var perdeu = false;

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto && tentativas > 0) {
    elementoResultado.innerHTML = "Você acertou!";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Escolha um número de 0 a 10!";
  } else if (chute != numeroSecreto && tentativas > 0) {
    tentativas--;
    errou = true;
    elementoResultado.innerHTML = "Você errou!";
  } else {
    elementoResultado.innerHTML = "Você não tem mais tentativas!";
    perdeu = true;
  }
  
   if (errou == true || tentativas > 0) {
    var elementoMaiorOuMenor = document.getElementById("maiorOuMenor")
  
    if (chute == numeroSecreto && tentativas > 0) {
      elementoMaiorOuMenor.innerHTML = "Parabéns!"
      tentativas--;
    } else if (chute < numeroSecreto && tentativas > 0) {
      elementoMaiorOuMenor.innerHTML = "Seu chute foi menor que o número secreto!"
    } else if (chute > numeroSecreto && tentativas > 0) {
      elementoMaiorOuMenor.innerHTML = "Seu chute foi maior que o número secreto!"
    } else if (perdeu == true){
      elementoMaiorOuMenor.innerHTML = "Sorteie novamente!"
    }
  }
}

function Sortear() {
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
  errou = false;
  perdeu = false;
  
  var elementoResultado = document.getElementById("resultado");
  var elementoMaiorOuMenor = document.getElementById("maiorOuMenor")
  elementoResultado.innerHTML = "";
  elementoMaiorOuMenor.innerHTML = "";
}