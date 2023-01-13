let quantidadeDeCartas;

function adicionaAsCastasAoJogo(){

    //Lista de gifs para embaralhar;
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



    //variável que distribue as cartas aleatoriamente;
    const cartas = [];

    //busca o conteudo no HTML que "guarda" as cartas;
    let conteiner = document.querySelector(".conteiner");

    //Loop que vai repetir a quantidade de cartas dadas acima;
    let = quantidadeDeCartas = 0;
    while ( quantidadeDeCartas < 4 || quantidadeDeCartas > 14 || quantidadeDeCartas % 2 !== 0) {
        quantidadeDeCartas = prompt ("Escolha o número de cartas que você quer jogar. Sendo eles números pares (entre 4 e 14).");
    }

    //Mostra as cartas no Jogo
    for (let i = 0; i < quantidadeDeCartas; i++){
        cartas.push(`
        <div onclick="clicar(this)" class="cartas  ${imagens[i]}">
            <div class="frente face">
                <img class="papagaio" src="./imagens/back.png" alt="Papagaio">
            </div>
            <div class="verso face">
                <img class="parrots" src="./${imagens[i]}" alt="parrots">
            </div>
        </div>
        `);
    }

    //comparador (compara se as cartas são ou não iguais);
    cartas.sort(comparadorDeCartas);

    function comparadorDeCartas(){

        //Propriedade (Math.random); Retorna um número pseudo-aleatório entre 0 e 1;
        return Math.random() - 0.5;
    }
    for (let i = 0; i < quantidadeDeCartas; i++){
        conteiner.innerHTML += cartas [i];
    }
}

adicionaAsCastasAoJogo();