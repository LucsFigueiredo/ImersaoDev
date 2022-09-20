function Submit() {
  var notaPrimeiroTrimestre = parseInt(document.getElementById("priTri").value)
  var notaSegundoTrimestre = parseInt(document.getElementById("segTri").value)
  var notaTerceiroTrimestre = parseInt(document.getElementById("terTri").value)
  var notaQuartoTrimestre = parseInt(document.getElementById("quaTri").value)
  
  var notaFinal = (notaPrimeiroTrimestre + notaSegundoTrimestre + notaTerceiroTrimestre + notaQuartoTrimestre) / 4

  if (notaFinal < 6) {
   alert("Média das notas: " + notaFinal + " (Situação: Reprovado!)")
}
  else {
     alert("Média das notas: " + notaFinal + " (Situação: Aprovado!)")
  }
}