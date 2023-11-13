let registerForm = document.getElementById("registerForm")
registerForm.addEventListener('submit', register)

function register(e) {
    e.preventDefault();
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let confirmPassword = document.getElementById("confirmPassword").value
    
    let rightRegister = document.getElementById("rightRegister")
    rightRegister.innerHTML = 
    `<div><h2>Welcome to EchoNotes
     ${fname} ${lname}
     </h2></div>`
}

function validatePassword() {
 
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password != confirmPassword) {
        document.getElementById('passwordAlert').style.color = 'red';
        document.getElementById('passwordAlert').innerHTML
            = '☒ <br>Password does not match';
        document.getElementById('submitButton').disabled = true;
        document.getElementById('submitButton').style.opacity = (0.6);
    } else {
        document.getElementById('passwordAlert').style.color = 'green';
        document.getElementById('passwordAlert').innerHTML =
            '🗹';
        document.getElementById('submitButton').disabled = false;
        document.getElementById('submitButton').style.opacity = (1);
    }
}

