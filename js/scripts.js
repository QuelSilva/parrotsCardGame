let quantidadeDeCartas;
//contador de jogadas
let contador = 0;

//lista de imagens
function distribuirCartas() {
  const imagens = [
    "imagens/bobrossparrot.gif",
    "imagens/bobrossparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/explodyparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/fiestaparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/metalparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/revertitparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/tripletsparrot.gif",
    "imagens/unicornparrot.gif",
    "imagens/unicornparrot.gif"
  ];

  const cartas = [];
  let conteiner = document.querySelector(".conteiner");
  //Loop que vai repetir a quantidade de cartas;
  quantidadeDeCartas = 0;
  while (
    quantidadeDeCartas < 4 ||
    quantidadeDeCartas > 14 ||
    quantidadeDeCartas % 2 !== 0
  ) {
    quantidadeDeCartas = prompt(
      "Selecione o número de cartas. Sendo eles números pares (entre 4 e 14)."
    );
  }
  for (let i = 0; i < quantidadeDeCartas; i++) {
    cartas.push(` <div onclick="virarCartas(this)" class="carta  ${imagens[i]}">
        <div class="frente face">
          <img class="papagaio" src="./imagens/back.png" alt="Papagaio">
        </div>
        <div class="verso face">
            <img class="parrots" src="./${imagens[i]}" alt="parrots">
        </div>
    </div>`);
  }
  cartas.sort(comparadorDeCartas);
  //Comparar se as cartas são ou não, iguais;
  function comparadorDeCartas() {
    console.log(comparadorDeCartas);
    //Math.random; Retorna um número pseudo-aleatório entre 0 e 1;
    return Math.random() - 0.5;
  }
  for (let i = 0; i < quantidadeDeCartas; i++) {
    conteiner.innerHTML += cartas[i];
  }
}

let primeiroClick, segundoClick;

//Função que faz com que a cartas virem;

function virarCartas(virar) {
  contador++;
  if (primeiroClick === undefined) {
    primeiroClick = virar;

    virar.classList.add("click");
  } else if (segundoClick === undefined) {
    segundoClick = virar;

    virar.classList.add("click");
    setTimeout(desvirarCartas, 1000);
  }
}

//Função que faz com que as cartas desvirem;
function desvirarCartas() {
  let carta1 = primeiroClick.classList.value;
  let carta2 = segundoClick.classList.value;

  if (carta1 !== carta2) {
    primeiroClick.classList.remove("click");
    segundoClick.classList.remove("click");
  } 
  else{
    setTimeout(fimDeJogo, 1000);
  }
  primeiroClick = undefined;
  segundoClick = undefined;

}

//Alert fim de jogo;
function fimDeJogo(){
  console.log(fimDeJogo.length);
  console.log(quantidadeDeCartas);
  let jogoFinalizado = document.querySelectorAll(".click");

  if(jogoFinalizado.length == quantidadeDeCartas){
    alert(`Parabéns! Você finalizou o jogo com ${contador} jogadas.`);
  }
}


//Imprime a função que distribue as cartas;
distribuirCartas();
