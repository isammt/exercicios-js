var TemperaturaF = parseFloat(prompt("Digite a temperatura em Fahrenheit:"));


var TemperaturaC = ((TemperaturaF -32) * 5 / 9);

console.log("A temperatura em Fahrenheit é: " + TemperaturaF + " e em Celsius " + TemperaturaC.toFixed(2) + "C°");
