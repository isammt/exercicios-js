function limitaPosicao(posicao) {
  if (posicao < 0) {
    return 0;
  } else if (posicao > 100) {
    return 100;
  } else {
    return posicao;
  }
}

//var posicaoInimigo = 100 ;
//var posicaoInimigo = -200 ;
var posicaoInimigo = 10 ;
var posicaoCorrigida = limitaPosicao(posicaoInimigo)
console.log("a posição corrigida do inimigo é:" + posicaoCorrigida);