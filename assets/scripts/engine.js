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
    actions: {
        button: document.getElementById("next-duel"),
    },
};

const playerSides = {
    player1: "py-cards",
    pc: "pc-cards",
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


    if (fieldSide === playerSides.player1) {
        cardImage.addEventListener("mouseover", () => {
            drawSelectedCard(IdCard);
        });

        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    return cardImage;
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

function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.pc);
}

init();