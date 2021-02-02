const player1 = {
	score: 0,
	scoreDisplay: document.querySelector('#p1Score'),
	button: document.querySelector('#p1Button'),
};

const player2 = {
	score: 0,
	scoreDisplay: document.querySelector('#p2Score'),
	button: document.querySelector('#p2Button'),
};

const playToSelect = document.querySelector('#playTo');
const resetButton = document.querySelector('#resetButton');

let isGameOver = false;
let winningScore = parseInt(playToSelect.value);

const resetGame = () => {
	isGameOver = false;

	for (let player of [player1, player2]) {
		player.score = 0;
		player.scoreDisplay.textContent = player.score;
		player.scoreDisplay.classList.remove(
			'has-text-success',
			'has-text-danger'
		);
		player.button.disabled = false;
	}
};

const updateScores = (player, opponent) => {
	if (!isGameOver) {
		player.score++;

		if (player.score === winningScore) {
			isGameOver = true;
			player.scoreDisplay.classList.add('has-text-success');
			opponent.scoreDisplay.classList.add('has-text-danger');

			player.button.disabled = true;
			opponent.button.disabled = true;
		}

		player.scoreDisplay.textContent = player.score;
	}
};

playToSelect.addEventListener('change', () => {
	winningScore = parseInt(playToSelect.value);
	resetGame();
});

player1.button.addEventListener('click', () => {
	updateScores(player1, player2);
});

player2.button.addEventListener('click', () => {
	updateScores(player2, player1);
});

resetButton.addEventListener('click', resetGame);
