document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    console.log('User Signed Up:', { name, email, password });

    alert('Signup successful!');
});
