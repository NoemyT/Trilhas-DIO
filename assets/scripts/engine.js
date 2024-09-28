const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time: document.querySelector("#time"),
        score: document.querySelector("#score")
    },
    values: {
        hitPosition: 0,
        result: 0,
        currentTime: 60
    },
    actions: {
        timerId: setInterval(randomSquare, 800),
        countdownTimerId: setInterval(countdown, 1000),
    }
};

function countdown() {
    state.values.currentTime--;
    state.view.time.textContent = state.values.currentTime;
    if (state.values.currentTime <= 0) {
        clearInterval(state.actions.countdownTimerId);
        clearInterval(state.actions.timerId);
        alert("Game Over! Results: " + state.values.result);
        location.reload();
    };
}

function playSound() {
    let audio = new Audio("./assets/audios/hit.m4a");
    audio.volume = .2;
    audio.play();
}

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            };
        })
    })
}

function init() {
    addListenerHitBox();
}

init();