/*************************************************
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

Author: Jennifer Elie
application: EchoNotes

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
**************************************************
Todo
***************
-make functions with passed in parameters for the form validation
-send user to next page after registering

TOC
***************
0. Register Form and Register Validation
1. Login Form Login Validation
2. Input Validation
***************/

/*----------------------------------------------
0. Register Form and Register Validation
------------------------------------------------*/
let registerForm = document.getElementById("registerForm");
registerForm?.addEventListener("submit", register);
// creates a user object if calling validateRegisterForm() returns true, else prints error to the console.
function register(e) {
  e.preventDefault();
  if (validateRegisterForm()) {
    let user = {
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
      confirmPassword: document.getElementById("confirmPassword").value,
    };
    console.log(
      user.fname,
      user.lname,
      user.email,
      user.password,
      user.confirmPassword
    );
    console.log("valid form");
  } else {
    console.log("error invalid form");
  }
}
// calls all input validation functions for the register form
function validateRegisterForm() {
  var valid = false;
  if (
    validateFname() &&
    validateLname() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    return true;
  } else {
    validateFname();
    validateLname();
    validateEmail();
    validatePassword();
    validateConfirmPassword();
  }
}
/*----------------------------------------------
1. Login Form Login Validation
------------------------------------------------*/
let loginForm = document.getElementById("loginForm");
loginForm?.addEventListener("submit", login);

function login(e) {
  e.preventDefault();
  if (validateLoginForm()) {
    let user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    console.log(user.email, user.password);
    console.log("valid form");
  } else {
    console.log("error invalid form");
  }
}
// calls all input validation functions for the login form
function validateLoginForm() {
  var valid = false;
  if (validateEmailLogin() && validatePasswordLogin()) {
    return true;
  } else {
    validateEmailLogin();
    validatePasswordLogin();
  }
}
/*----------------------------------------------
2. Input Validation
------------------------------------------------*/
//function to validate the first name field on key up
function validateFname() {
  var fname = document.getElementById("fname").value;
  var successIcon = document.getElementById("fnameSuccess");
  var errorIcon = document.getElementById("fnameError");
  var errorMSG = document.getElementById("fnameErrorMSG");
  var label = document
    .getElementById("fnameLabel")
    .textContent.replace(":", "");
  var length = 30;
  var fnameRegex = /^[a-zA-Z]*$/g;
  if (fname === "") {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>The ${label} field can not be blank`;
  } else if (fname.length > length) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} field can not be longer than ${length} characters`;
  } else if (!fnameRegex.test(fname)) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br> Invalid character in the ${label} field`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    return true;
  }
}
//function to validate the last name field on key up
function validateLname() {
  var lname = document.getElementById("lname").value;
  var successIcon = document.getElementById("lnameSuccess");
  var errorIcon = document.getElementById("lnameError");
  var errorMSG = document.getElementById("lnameErrorMSG");
  var label = document
    .getElementById("lnameLabel")
    .textContent.replace(":", "");
  var length = 30;
  var lnameRegex = /^[a-zA-Z]*$/g;
  if (lname === "") {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>The ${label} field can not be blank`;
  } else if (lname.length > length) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} field can not be longer than ${length} characters`;
  } else if (!lnameRegex.test(lname)) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br> Invalid character in the ${label} field`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    return true;
  }
}
//function to validate the email address field on key up
function validateEmail() {
  var email = document.getElementById("email").value;
  var successIcon = document.getElementById("emailSuccess");
  var errorIcon = document.getElementById("emailError");
  var errorMSG = document.getElementById("emailErrorMSG");
  var label = document
    .getElementById("emailLabel")
    .textContent.replace(":", "");
  var length = 30;
  var emailRegex = /^\S+@\S+$/; //very simple email regex for testing purposes
  if (email === "") {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} can not be blank`;
  } else if (email.length > length) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} field can not be longer than ${length} characters`;
  } else if (!emailRegex.test(email)) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br> Invalid ${label} format, standard format is <br>user@example.com`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    return true;
  }
}
//function to validate the password field on key up
function validatePassword() {
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("passwordSuccess");
  var errorIcon = document.getElementById("passwordError");
  var errorMSG = document.getElementById("passwordErrorMSG");
  var label = document
    .getElementById("passwordLabel")
    .textContent.replace(":", "");
  var minLength = 3;
  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{3,}$/g;
  if (password === "" || password.length < minLength) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} must contain at least 3 characters`;
  } else if (!passwordRegex.test(password)) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br> Invalid ${label} format, standard format is <br>user@example.com`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    var confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword != "") {
      validateConfirmPassword();
    }
    return true;
  }
}
//function to validate the confirm password field on key up
function validateConfirmPassword() {
  var confirmPassword = document.getElementById("confirmPassword").value;
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("confirmPasswordSuccess");
  var errorIcon = document.getElementById("confirmPasswordError");
  var errorMSG = document.getElementById("confirmPasswordErrorMSG");
  var label = document
    .getElementById("confirmPasswordLabel")
    .textContent.replace(":", "");
  if (password != confirmPassword) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} does not match`;
  } else if ((confirmPassword = "")) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} can not be blank`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    return true;
  }
}
//there will be a better solution in the future, but for now extra functions for login
//function to validate the password field on key up
function validatePasswordLogin() {
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("passwordSuccess");
  var errorIcon = document.getElementById("passwordError");
  var errorMSG = document.getElementById("passwordErrorMSG");
  var label = document.getElementById("passwordLabel").textContent.replace(":", "");
  var minLength = 3;
  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{3,}$/g;
  if (password === "" || password.length < minLength) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br>${label} must contain at least 3 characters`;
  } else if (!passwordRegex.test(password)) {
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMSG.innerHTML = `<br> Invalid ${label} format, standard format is <br>user@example.com`;
  } else {
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMSG.innerHTML = "";
    return true;
  }
}
//function to validate the email address field on key up
function validateEmailLogin() {
    var email = document.getElementById("email").value;
    var successIcon = document.getElementById("emailSuccess");
    var errorIcon = document.getElementById("emailError");
    var errorMSG = document.getElementById("emailErrorMSG");
    var label = document
      .getElementById("emailLabel")
      .textContent.replace(":", "");
    var length = 30;
    var emailRegex = /^\S+@\S+$/; //very simple email regex for testing purposes
    if (email === "") {
      successIcon.classList.add("hidden");
      errorIcon.classList.remove("hidden");
      errorMSG.innerHTML = `<br>${label} can not be blank`;
    } else if (email.length > length) {
      successIcon.classList.add("hidden");
      errorIcon.classList.remove("hidden");
      errorMSG.innerHTML = `<br>${label} field can not be longer than ${length} characters`;
    } else if (!emailRegex.test(email)) {
      successIcon.classList.add("hidden");
      errorIcon.classList.remove("hidden");
      errorMSG.innerHTML = `<br> Invalid ${label} format, standard format is <br>user@example.com`;
    } else {
      successIcon.classList.remove("hidden");
      errorIcon.classList.add("hidden");
      errorMSG.innerHTML = "";
      return true;
    }
}