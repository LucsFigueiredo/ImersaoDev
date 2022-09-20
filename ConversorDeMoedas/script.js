var valorMultiplicar;
var selecionarDe = document.querySelector(".selecionarDe");
var selecionarPara = document.querySelector(".selecionarPara");
selecionarDe.addEventListener("change", (event) => {
  if (event.target.value == "Dólar") {
    dolar();
  } else if (event.target.value == "Yen") {
    yen();
  } else if (event.target.value == "Bitcoin") {
    bitcoin();
  } else if (event.target.value == "Real") {
    real();
  }
});

function dolar() {
  selecionarPara.addEventListener("change", (event) => {
    if (event.target.value == "Yen") {
      dolarParaYen();
    } else if (event.target.value == "Bitcoin") {
      dolarParaBitcoin();
    } else if (event.target.value == "Real") {
      dolarParaReal();
    }
  });
}

function yen() {
  selecionarPara.addEventListener("change", (event) => {
    if (event.target.value == "Dólar") {
      yenParaDolar();
    } else if (event.target.value == "Bitcoin") {
      yenParaBitcoin();
    } else if (event.target.value == "Real") {
      yenParaReal();
    }
  });
}

function bitcoin() {
  selecionarPara.addEventListener("change", (event) => {
    if (event.target.value == "Dólar") {
      bitcoinParaDolar();
    } else if (event.target.value == "Yen") {
      bitcoinParaYen();
    } else if (event.target.value == "Real") {
      bitcoinParaReal();
    }
  });
}

function real() {
  selecionarPara.addEventListener("change", (event) => {
    if (event.target.value == "Dólar") {
      realParaDolar();
    } else if (event.target.value == "Yen") {
      realParaYen();
    } else if (event.target.value == "Bitcoin") {
      realParaBitcoin();
    }
  });
}

function dolarParaYen() {
  valorMultiplicar = 142.5;
}

function dolarParaBitcoin() {
  valorMultiplicar = 0.000046;
}

function dolarParaReal() {
  valorMultiplicar = 5.15;
}

function yenParaDolar() {
  valorMultiplicar = 0.007;
}

function yenParaBitcoin() {
  valorMultiplicar = 0.0000003;
}

function yenParaReal() {
  valorMultiplicar = 0.036;
}

function bitcoinParaDolar() {
  valorMultiplicar = 21609.4;
}

function bitcoinParaYen() {
  valorMultiplicar = 3079447.55;
}

function bitcoinParaReal() {
  valorMultiplicar = 111240.87;
}

function realParaDolar() {
  valorMultiplicar = 0.19;
}

function realParaYen() {
  valorMultiplicar = 27.68;
}

function realParaBitcoin() {
  valorMultiplicar = 0.000009;
}

function Converter() {
  var valor = parseFloat(document.getElementById("valor").value);
  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorEm = valor * valorMultiplicar;
  var valorConvertido = "O valor é " + valorEm;
  selecionarDe.value = "";
  selecionarPara.value = "";
  document.getElementById("valor").value = "";

  elementoValorConvertido.innerHTML = valorConvertido;
}