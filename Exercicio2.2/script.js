function personagemMorreu(dano, saude) {
  if (saude - dano <= 0) {
    return 1;
  } else {
    return 0;
  }
}

var dano = 50;
var saude = 30;
var resultado = personagemMorreu(dano, saude);
console.log("O personagem morreu?" + resultado);
