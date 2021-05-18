function ConverterParaGasolina() {
  
    /*Na variavel 'RealParaLitros', utilizei a função 'document.getElementById' 
    Utilizei tb "parseInt" para mostrar o valor inteiro e o "toFixed" para mostrar apenas duas casas decimais
    bem como utilizei a função iner.Text para que o resultado possa aparecer abaixo do respectivo conversor
   Para isto, dei um google na web e usei como referência a live do MARCOBRUNO-Alura */
    
      var valorEmReal = parseInt(document.getElementById("RealParaLitros").value)
  var valorEmGasolina = (valorEmReal / 5.69) .toFixed(2)
   document.getElementById('resultadoLitro').innerText = "Com este valor você compra " + valorEmGasolina + " litros de Gasolina"
  }
  
  // alert("$ " + valorEmReal + " convertido em Litros é igual a " + valorEmGasolina)
  
  function ConverterParaAlcool() {
    
      var valorEmRealDois = parseInt(document.getElementById("RealParaLitrosDeAlcool").value)
  
      var valorEmAlcool = (valorEmRealDois / 3.93) .toFixed(2)
  
      document.getElementById('resultadoAlcool').innerText = "Com este valor você compra " + valorEmAlcool + " litros de Alcóol"
  }
  // alert("$ " + valorEmRealDois + " convertido em Litros é igual a " + valorEmAlcool) usei a palavra dois para diferenciar as variaveis 
  
  function ConverterParaDiesel() {
    
      var valorEmRealTres = parseInt(document.getElementById("RealParaLitrosDeDiesel").value)
  
      var valorEmDiesel = (valorEmRealTres / 4.23) .toFixed(2)
  
      document.getElementById('resultadoDiesel').innerText = "Com este valor você compra " + valorEmDiesel + " litros de Diesel"
  }
  // alert("$ " + valorEmRealTres + " convertido em Litros é igual a " + valorEmDiesel)  usei a palavra Três para diferenciar as variaveis 