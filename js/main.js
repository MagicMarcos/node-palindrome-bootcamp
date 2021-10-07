// ?student=${userName}

const button = document.querySelector('button');
button.addEventListener('click', fetchPalindrome);

function fetchPalindrome() {
	let palindromeVal = document.querySelector('input').value.toLowerCase();

	if (palindromeVal === '') {
		alert('Please Enter Text');
	} else {
		palindromeVal = palindromeVal
			.split('')
			.filter(el => el !== ' ')
			.join('');

		fetch(`/api?word=${palindromeVal}`)
			.then(res => res.json())
			.then(data => {
				presentData(data);
			})
			.catch(err => console.log(err));
	}
}

function presentData(data) {
	console.log(data);
	document.querySelector('h3').innerText = data;
}
