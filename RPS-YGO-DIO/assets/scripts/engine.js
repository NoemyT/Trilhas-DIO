const state = {
    score: {
        playerScore: 0,
        pcScore: 0,
        scoreBox: document.getElementById("score_points"),
    },
    cardSprites: {
        avatar: document.getElementById("card-img"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type"),
    },
    fieldCards: {
        player: document.getElementById("player-field-card"),
        pc: document.getElementById("pc-field-card"),
    },
    playerSides: {
        player1: "py-cards",
        player1BOX : document.querySelector("#py-cards"), 
        pc: "pc-cards",
        pcBOX : document.querySelector("#pc-cards"),
    },
    actions: {
        button: document.getElementById("next-duel"),
    },
};

const cardData = [
    {
        id: 0,
        name: "Blue Eyes White Dragon",
        type: "Scissors",
        img: "./assets/imgs/icons/dragon.png",
        WinOf: [1],
        LoseTo: [2],
    },
    {
        id: 1,
        name: "Dark Magician",
        type: "Paper",
        img: "./assets/imgs/icons/magician.png",
        WinOf: [2],
        LoseTo: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Rock",
        img: "./assets/imgs/icons/exodia.png",
        WinOf: [0],
        LoseTo: [1],
    },
];

async function getRandomCardId() {
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard, fieldSide) {
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./assets/imgs/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");


    if (fieldSide === state.playerSides.player1) {
        cardImage.addEventListener("mouseover", () => {
            drawSelectedCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    return cardImage;
}

async function setCardsField(cardId) {
    await removeAllCardsImages();

    let pcCardId = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.pc.style.display = "block";

    state.fieldCards.player.src = cardData[cardId].img;
    state.fieldCards.pc.src = cardData[pcCardId].img;

    let duelResult = await checkDuelResult(cardId, pcCardId);

    await updateScore();
    await drawButton(duelResult);
}

async function drawButton(text) {
    state.actions.button.innerText = text.toUpperCase();
    state.actions.button.style.display = "block";
}

async function updateScore() {
    state.score.scoreBox.innerText = `WINS: ${state.score.playerScore} | LOSSES: ${state.score.pcScore}`;
}

async function removeAllCardsImages() {
    let { pcBOX, player1BOX } = state.playerSides;
    let imgElements = pcBOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    imgElements = player1BOX.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function checkDuelResult(cardId, pcCardId) {
    let duelResults = "";
    let playerCard = cardData[cardId];

    if (playerCard.id === pcCardId) {
        duelResults = "Draw";
        await playAudio("tab");
    }
    
    if (playerCard.WinOf.includes(pcCardId)) {
        duelResults = "You Won";
        await playAudio("win");
        state.score.playerScore++;
    }

    if (playerCard.LoseTo.includes(pcCardId)) {
        duelResults = "You Lost";
        await playAudio("lose");
        state.score.pcScore++;
    }

    return duelResults;
} 

async function drawSelectedCard(index) {
    state.cardSprites.avatar.src = cardData[index].img;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = "Type: " + cardData[index].type;
}

async function drawCards(cardNumbers, fieldSide) {
    for (let i=0; i<cardNumbers; i++) {
        const randIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel() {
    state.cardSprites.avatar.src = "";
    state.actions.button.style.display = "none";

    state.cardSprites.name.innerHTML = "SELECT";
    state.cardSprites.type.innerHTML = "A CARD";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.pc.style.display = "none";

    init();
}

async function playAudio(status) {
    const audio = new Audio(`./assets/sfx/${status}.wav`);
    audio.play();
}

function init() {
    const bgm = document.getElementById("bgm");
    bgm.volume = 0.4;
    bgm.play();

    state.fieldCards.player.style.display = "none";
    state.fieldCards.pc.style.display = "none";

    drawCards(5, state.playerSides.player1);
    drawCards(5, state.playerSides.pc);
}

init();