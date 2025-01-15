const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (e) {
  e.preventDefault(); // stops the page from refreshing

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // For testing, just log the values or show an alert
  console.log('Email:', email);
  console.log('Password:', password);

  // Example: show an alert
  alert(`You typed: \nEmail: ${email}\nPassword: ${password}`);

  // If you had a server or database, you could send the data like this:
  // fetch('/api/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email: email, password: password }),
  // })
  // .then(response => response.json())
  // .then(data => { ... })
  // .catch(error => console.error(error));
});
