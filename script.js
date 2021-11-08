let dificuldade = 0;
let cartas = [];
let cartasViradas = 0;
let jogadas = 0;
let primeiraCarta;
let segundaCarta;
let acertos = 0;
let idRelogio = setInterval(relogio, 1000);
let contadorRelogio = 0;
const baralho = [
    `
    <div class="card 1" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face " data-identifier="front-face">
        <img src="imagens/bobrossparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 1" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/bobrossparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 2" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/explodyparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 2" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/explodyparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 3" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/fiestaparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 3" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/fiestaparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 4" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/metalparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 4" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/metalparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 5" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/revertitparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 5" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/revertitparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 6" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/tripletsparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 6" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/tripletsparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 7" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/unicornparrot.gif">
        </div>
    </div>
    `,
    `
    <div class="card 7" data-identifier="card" onclick="virarCarta(this)">
        <div class="face back-face" data-identifier="back-face">
        <img src="Imagens/front.png" />
    </div>
    <div class="face front-face" data-identifier="front-face">
        <img src="imagens/unicornparrot.gif">
        </div>
    </div>
    `,
];

começarJogo()

function começarJogo() {
    while (dificuldade % 2 !== 0 || dificuldade < 4 || dificuldade > 14) {
        dificuldade = prompt("Com quantas cartas você quer jogar?(4 - 14)");
    }
    pescaCarta()

}

function pescaCarta() {
    for (let i = 0; i < dificuldade; i++) {
        cartas[i] = baralho[i];

    }
    cartas.sort(comparador);
    distribuirCartas();
}

function virarCarta(carta) {

    if (!carta.classList.contains('flip')) {
        carta.classList.add("flip");
        carta.classList.add("virada");
        cartasViradas++;
    }



    jogadas++;
    if (cartasViradas === 1) {
        primeiraCarta = carta;
    } else {
        segundaCarta = carta;
        setTimeout(testarCartas, 100);

    }

}

function testarCartas() {
    if (cartasViradas === 2 && primeiraCarta.className === segundaCarta.className) {
        cartasViradas = 0;
        acertos++;
    } else {
        addNaoClica();
        setTimeout(errou, 1000);
        setTimeout(removeNaoClica, 1050);


    }


}

function distribuirCartas() {

    for (let i = 0; i < dificuldade; i++) {
        document.querySelector("main").innerHTML += cartas[i];
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function errou() {
    cartasViradas = 0;
    primeiraCarta.classList.remove("flip");
    segundaCarta.classList.remove("flip")
    primeiraCarta.classList.remove("virada")
    segundaCarta.classList.remove("virada")

}

function addNaoClica() {
    const todasCartas = document.querySelectorAll(".card")

    for (let i = 0; i < todasCartas.length; i++) {
        todasCartas[i].classList.add("nao-clica");
    }
}

function removeNaoClica() {
    const todasCartas = document.querySelectorAll(".card")

    for (let i = 0; i < todasCartas.length; i++) {
        todasCartas[i].classList.remove("nao-clica");
    }
}



function relogio() {
    contadorRelogio++;
    document.querySelector(".relogio").innerHTML = contadorRelogio;
    if (acertos === dificuldade / 2) {

        clearInterval(idRelogio);
        alert("Você ganhou em " + contadorRelogio + " segundos com " + jogadas + " jogadas! ");

        setTimeout(novoJogo, 1000);

    }
}

function novoJogo() {
    const jogarNovamente = prompt("Voce deseja jogar novamente?(sim/nao)");
    if (jogarNovamente === 'sim') {
        location.reload(true);
    }
}