const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
const playToSelect = document.querySelector('#playTo');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#resetButton');

let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(playToSelect.value);

const resetGame = () => {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1ScoreDisplay.textContent = p1Score;
	p2ScoreDisplay.textContent = p2Score;

	p1ScoreDisplay.classList.remove('has-text-danger', 'has-text-success');
	p2ScoreDisplay.classList.remove('has-text-danger', 'has-text-success');

	p1Button.disabled = false;
	p2Button.disabled = false;
};

playToSelect.addEventListener('change', () => {
	winningScore = parseInt(playToSelect.value);
	resetGame();
});

p1Button.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1ScoreDisplay.classList.add('has-text-success');
			p2ScoreDisplay.classList.add('has-text-danger');

			p1Button.disabled = true;
			p2Button.disabled = true;
		}
	}
	p1ScoreDisplay.textContent = p1Score;
});

p2Button.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			isGameOver = true;
			p2ScoreDisplay.classList.add('has-text-success');
			p1ScoreDisplay.classList.add('has-text-danger');

			p1Button.disabled = true;
			p2Button.disabled = true;
		}
	}
	p2ScoreDisplay.textContent = p2Score;
});

resetButton.addEventListener('click', resetGame);
