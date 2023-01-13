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
  //loop que vai repetir a quantidade de cartas
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
  //comparar se as cartas são ou não, iguais
  function comparadorDeCartas() {
    console.log(comparadorDeCartas);
    //Math.random; Retorna um número pseudo-aleatório entre 0 e 1.
    return Math.random() - 0.5;
  }
  for (let i = 0; i < quantidadeDeCartas; i++) {
    conteiner.innerHTML += cartas[i];
  }
}

let primeiroClick, segundoClick;

//função que faz com que a cartas virem

function virarCartas(virar) {
  contador++;
  if (primeiroClick === undefined) {
    primeiroClick = virar;

    virar.classList.add("click");
  } else if (segundoClick === undefined) {
    segundoClick = virar;

    virar.classList.add("click");
  }
}
//imprime a função que add as cartas
distribuirCartas();
