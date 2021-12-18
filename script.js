'use strict';


const minus = document.querySelector('.minus'),
	  plus = document.querySelector('.plus'),
	  target = document.querySelector('.target'),
	  lvl = document.querySelector('.lvl'),
	  reward = document.querySelector('.reward');
let counter = 0;


if (localStorage.getItem('num')) {
	counter = localStorage.getItem('num');
	target.textContent = localStorage.getItem('num');
} else {
	counter = 0;
	localStorage.setItem('num', counter);
	target.textContent = localStorage.getItem('num');
}

change()
function change(__crement) {
	__crement;
	target.textContent = counter;
	localStorage.setItem('num', counter);

	reward.style.display = 'none';

	if (counter < 0 && counter > -15) {
		lvl.textContent = 'Не туда';
	}

	if (counter == 0) {
		lvl.textContent = '¯\\_(ツ)_/¯'
	}

	if (counter > 0 && counter < 15) {
		lvl.textContent = 'Слабо';
	} else if (counter >= 15 && counter < 35) {
		lvl.textContent = 'Норм';
	} else if (counter >= 35 && counter < 50) {
		lvl.textContent = 'Почти...';
	} else if (counter >= 50) {
		lvl.textContent = 'Псих!';
		reward.style.display = 'block';
		setTimeout(() => {
			reward.addEventListener('click', () => {
				reward.style.display = 'none';
			});
		}, 2000);
	}
}

minus.addEventListener('click', () => change(counter--));
plus.addEventListener('click', () => change(counter++));






