let dificuldade = 0;
let cartas = [];
const baralho = [
    `<div class="card" data-identifier="card" onclick="virarCarta">
        <div class="face back-face" data-identifier="back-face">
            <img src="Imagens/front.png" />
         </div>
        <div class="face front-face" data-identifier="front-face">
            frente1
        </div>
    </div>`,
    `<div class="card" data-identifier="card" onclick="virarCarta">
<div class="face back-face" data-identifier="back-face">
  <img src="Imagens/front.png" />
</div>
<div class="face front-face" data-identifier="front-face">
  frente1
</div>
</div>`,
    `<div class="card" data-identifier="card" onclick="virarCarta">
<div class="face back-face" data-identifier="back-face">
  <img src="Imagens/front.png" />
</div>
<div class="face front-face" data-identifier="front-face">
  frente2
</div>
</div>`,
    `<div class="card" data-identifier="card" onclick="virarCarta">
<div class="face back-face" data-identifier="back-face">
<img src="Imagens/front.png" />
</div>
<div class="face front-face" data-identifier="front-face">
frente2
</div>
</div>`,
    `<div class="card" data-identifier="card" onclick="virarCarta">
<div class="face back-face" data-identifier="back-face">
<img src="Imagens/front.png" />
</div>
<div class="face front-face" data-identifier="front-face">
frente3
</div>
</div>`,
    `<div class="card" data-identifier="card" onclick="virarCarta">
<div class="face back-face" data-identifier="back-face">
<img src="Imagens/front.png" />
</div>
<div class="face front-face" data-identifier="front-face">
frente3
</div>
</div>`,
];
começarJogo()

function começarJogo() {
    while (dificuldade % 2 !== 0 || dificuldade < 4 || dificuldade > 14) {
        dificuldade = prompt("Com quantas cartas você quer jogar?(4 - 14)");
    }
    if (dificuldade >= 4 && dificuldade <= 14) {
        pescaCarta()
    }
}

function pescaCarta() {
    for (let i = 0; i < dificuldade; i++) {
        cartas[i] = baralho[i];

    }
    cartas.sort(comparador);
    distribuirCartas();
}

function virarCarta(carta) {
    carta.classList.toggle("flip");
}

function distribuirCartas() {

    for (let i = 0; i < dificuldade; i++) {
        document.querySelector("main").innerHTML += cartas[i];
    }
}

function comparador() {
    return Math.random() - 0.5;
}