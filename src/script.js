///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Calculadora(num1, num2, operador){
  let numero1 = Number(num1);
  let numero2 = Number(num2);
  let resultado;

  switch (operador){
    case '+':
      resultado = numero1 + numero2;
      break;
    case '-':
      resultado = numero1 - numero2;
      break;
    case '/':
      resultado = numero1 / numero2;
      break;
    case '*':
      resultado = numero1 * numero2;
      break;
    case 'e':
      resultado = 1;
      for(let count = 0; count < numero2; count++){
        resultado *= numero1;
      }
      break;
  }
  if(resultado == undefined || resultado > 1000000){
    resultado = 'ERRO';
  }

  return resultado
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}