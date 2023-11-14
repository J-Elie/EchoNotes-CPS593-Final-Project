let registerForm = document.getElementById("registerForm")
registerForm?.addEventListener('submit', register)

let loginForm = document.getElementById("loginForm")
loginForm?.addEventListener('submit', login)

function register(e) {
    e.preventDefault();
    let user = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
      }
    console.log(user.fname, user.lname, user.email, user.password, user.confirmPassword)
    // let rightRegister = document.getElementById("rightRegister")
    // rightRegister.innerHTML = 
    // `<div><h2>Welcome to EchoNotes
    //  ${fname} ${lname}
    //  </h2></div>`
}

function login(e) {
    e.preventDefault();
    let user = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
      }
    console.log(user.email, user.password)
}




// form validation 
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

