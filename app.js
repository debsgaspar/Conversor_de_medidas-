function Converterkgs() {
    var valorElementoKgs = document.getElementById("kgsparalbs").value;
    var valorKgsNumerico = parseFloat(valorElementoKgs);
    var valorEmLbs = valorKgsNumerico * 2.205;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O peso é " + valorEmLbs + " Libras";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
  function Converterlbs() {
    var valorElementoLbs = document.getElementById("lbsparakgs").value;
    var valorLbsNumerico = parseFloat(valorElementoLbs);
    var valorEmKgs = valorLbsNumerico / 2.205;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O peso é " + valorEmKgs + " Kgs";
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  