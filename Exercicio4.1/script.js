var numero = parseInt(prompt("Digite um número para ver sua tabuada:"));

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado);
}
