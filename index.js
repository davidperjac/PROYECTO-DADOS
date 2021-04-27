let randomnumber = Math.floor(Math.random() * 6 + 1);

let dadoaleatorio = 'images/' + 'dice' + randomnumber + '.png';

document.querySelectorAll('img')[0].setAttribute('src', dadoaleatorio);

let randomnumber2 = Math.floor(Math.random() * 6 + 1);

let dadoaleatorio2 = 'images/' + 'dice' + randomnumber2 + '.png';

document.querySelectorAll('img')[1].setAttribute('src', dadoaleatorio2);

if (randomnumber > randomnumber2) {
	document.querySelector('h1').innerHTML = 'Player 1 Wins';
} else if (randomnumber == randomnumber2) {
	document.querySelector('h1').innerHTML = 'Draw';
} else {
	document.querySelector('h1').innerHTML = 'Player 2 Wins';
}

