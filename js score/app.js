const pp1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    p1: document.querySelector('#p1')
}
const pp2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    p1: document.querySelector('#p2')
}

const reset = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#Score');

let winningScore = 5;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.p1.classList.add('has-text-success');
            opponent.p1.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.p1.textContent = player.score;
    }
}


pp1.button.addEventListener('click', function () {
    updateScores(pp1, pp2)
})
pp2.button.addEventListener('click', function () {
    updateScores(pp2, pp1)
})
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resett();
})
reset.addEventListener('click', resett)
function resett() {
    isGameOver = false;
    for (let p of [pp1, pp2]) {
        p.score = 0;
        p.textContext = 0;
        p.classList.remove('has-text.success', 'has-text-danger');
        p.button.disabled = false;
    }
} 