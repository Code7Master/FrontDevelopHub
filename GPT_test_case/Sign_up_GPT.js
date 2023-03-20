// add form validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	
	const username = document.querySelector('#username');
	const email = document.querySelector('#email');
	const password = document.querySelector('#password');

	if (username.value === '' || email.value === '' || password.value === '') {
		alert('Please fill in all fields.');
		return;
	}

	// add AJAX request to submit form data
	// ...
});
