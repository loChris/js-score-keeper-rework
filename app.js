const p1ScoreDisplay = document.querySelector('#p1Score');
const p2ScoreDisplay = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');

let isGameOver = false;
let winningScore = 5;
let p1Score = 0;
let p2Score = 0;

p1Button.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			isGameOver = true;
		}
	}
	p1ScoreDisplay.textContent = p1Score;
});

p2Button.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			isGameOver = true;
		}
	}
	p2ScoreDisplay.textContent = p2Score;
});
