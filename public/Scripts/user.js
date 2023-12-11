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
import { fetchData, setCurrentUser} from "./main.js";
/*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
0. Register Form and Register Validation
-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#*/
let registerForm = document.getElementById("registerForm");
registerForm?.addEventListener("submit", register);
/**
 * register creates a user object if calling validateRegisterForm() returns true, else prints error to the console.
 * @param {*} e preventDefault()
 */
function register(e) {
  e.preventDefault();
  if (validateRegisterForm()) {
    let user = {
      first_name: document.getElementById("fname").value,
      last_name: document.getElementById("lname").value,
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
    fetchData("/users/register", user, "POST")
      .then((data) => {
        setCurrentUser(data);
        window.location.href = "note.html";
      })
      .catch((err) => {
        document.querySelector(
          ".registerForm #backendRegisterErrorMSG"
        ).innerHTML = `<br>${err.message}`;
        document.getElementById("pswd").value = "";
      });
  } else {
    console.log("error invalid form");
  }
}
/**
 * validateRegisterForm
 * @returns true if all register form fields are properly formatted
 */
function validateRegisterForm() {
  var valid = false;
  if (
    validateFnameRegister() &&
    validateLnameRegister() &&
    validateEmailRegister() &&
    validatePasswordRegister() &&
    validateConfirmPasswordRegister()
  ) {
    return true;
  } else {
    validateFnameRegister();
    validateLnameRegister();
    validateEmailRegister();
    validatePasswordRegister();
    validateConfirmPasswordRegister();
  }
}
let FnameRegister = document.getElementById("fname");
FnameRegister?.addEventListener("keyup", validateFnameRegister);
/**
 * validateFnameRegister
 * @returns true if first name field is valid
 */
function validateFnameRegister() {
  var fname = document.getElementById("fname").value;
  var successIcon = document.getElementById("fnameSuccess");
  var errorIcon = document.getElementById("fnameError");
  var errorMSG = document.getElementById("fnameErrorMSG");
  var label = document
    .getElementById("fnameLabel")
    .textContent.replace(":", "");
  var length = 30;
  var fnameRegex = /^[a-zA-Z]*$/g;
  switch (true) {
    case fname === "":
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} can not be blank`
      );
      break;
    case fname.length > length:
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} can not be longer than ${length} characters`
      );
      break;
    case !fnameRegex.test(fname):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br> Invalid character in ${label}`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}
let LnameRegister = document.getElementById("lname");
LnameRegister?.addEventListener("keyup", validateLnameRegister);
/**
 * validateLnameRegister
 * @returns true if last name field is valid
 */
function validateLnameRegister() {
  var lname = document.getElementById("lname").value;
  var successIcon = document.getElementById("lnameSuccess");
  var errorIcon = document.getElementById("lnameError");
  var errorMSG = document.getElementById("lnameErrorMSG");
  var label = document
    .getElementById("lnameLabel")
    .textContent.replace(":", "");
  var length = 30;
  var lnameRegex = /^[a-zA-Z]*$/g;
  switch (true) {
    case lname === "":
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} can not be blank`
      );
      break;
    case lname.length > length:
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label}can not be longer than ${length} characters`
      );
      break;
    case !lnameRegex.test(lname):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br> Invalid character in ${label}`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}
let emailRegister = document.getElementById("email");
emailRegister?.addEventListener("keyup", validateEmailRegister);
/**
 * validateEmailRegister
 * @returns true if email field is valid
 */
function validateEmailRegister() {
  var email = document.getElementById("email").value;
  var successIcon = document.getElementById("emailSuccess");
  var errorIcon = document.getElementById("emailError");
  var errorMSG = document.getElementById("emailErrorMSG");
  var label = document
    .getElementById("emailLabel")
    .textContent.replace(":", "");
  var length = 30;
  var emailRegex = /^\S+@\S+$/; //very simple email regex for testing purposes
  switch (true) {
    case email === "":
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} can not be blank`
      );
      break;
    case email.length > length:
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label}can not be longer than ${length} characters`
      );
      break;
    case !emailRegex.test(email):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br> Invalid ${label} format, standard format is <br>user@example.com`
      );
      break;
    // case email is in use:
    //   validateInput(errorIcon, successIcon, errorMSG, `<br>The ${label} you entered is already in use`)
    //   break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}
let passwordRegister = document.getElementById("password");
passwordRegister?.addEventListener("keyup", validatePasswordRegister);
/**
 * validatePasswordRegister
 * @returns true if the password field is valid
 */
function validatePasswordRegister() {
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("passwordSuccess");
  var errorIcon = document.getElementById("passwordError");
  var errorMSG = document.getElementById("passwordErrorMSG");
  var label = document
    .getElementById("passwordLabel")
    .textContent.replace(":", "");
  var minLength = 3;
  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{3,}$/g;
  switch (true) {
    case password === "" || password.length < minLength:
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} must contain at least 3 characters`
      );
      break;
    case !passwordRegex.test(password):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br> Invalid ${label} character`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      var confirmPassword = document.getElementById("confirmPassword").value;
      if (confirmPassword != "") {
        validateConfirmPasswordRegister();
      }
      return true;
  }
}
let confirmPasswordRegister = document.getElementById("confirmPassword");
confirmPasswordRegister?.addEventListener("keyup", validateConfirmPasswordRegister);
/**
 * validateConfirmPasswordRegister
 * @returns true if the confirm password field is valid
 */
function validateConfirmPasswordRegister() {
  var confirmPassword = document.getElementById("confirmPassword").value;
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("confirmPasswordSuccess");
  var errorIcon = document.getElementById("confirmPasswordError");
  var errorMSG = document.getElementById("confirmPasswordErrorMSG");
  var label = document
    .getElementById("confirmPasswordLabel")
    .textContent.replace(":", "");
  switch (true) {
    case password != confirmPassword:
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} does not match`
      );
      break;
    case confirmPassword == "":
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>${label} can not be blank`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}

/*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
1. Login Form Login Validation
-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#*/
let loginForm = document.getElementById("loginForm");
loginForm?.addEventListener("submit", login);
/**
 * login creates a user object if calling validateLoginForm() returns true, else prints error to the console.
 * @param {*} e preventDefault()
 */
function login(e) {
  e.preventDefault();
  if (validateLoginForm()) {
    let user = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    console.log(user.email, user.password);
    console.log("valid form");

    fetchData("/users/login", user, "POST")
      .then((data) => {
        setCurrentUser(data);
        window.location.href = "note.html";
      })
      .catch((err) => {
        document.querySelector(".loginForm #backendLoginErrorMSG").innerHTML = `<br>${err.message}`;
        // document.getElementById("username").value = ""
        // document.getElementById("pswd").value = ""
      });
  } else {
    console.log("error invalid form");
  }
}

/**
 * validateLoginForm
 * @returns true if all login form fields are properly formatted
 */
function validateLoginForm() {
  var valid = false;
  if (validateEmailLogin() && validatePasswordLogin()) {
    return true;
  } else {
    validateEmailLogin();
    validatePasswordLogin();
  }
}
/**
 * validatePasswordLogin
 * @returns true if login password properly formatted
 */
function validatePasswordLogin() {
  var password = document.getElementById("password").value;
  var successIcon = document.getElementById("passwordSuccess");
  var errorIcon = document.getElementById("passwordError");
  var errorMSG = document.getElementById("passwordErrorMSG");
  var label = document
    .getElementById("passwordLabel")
    .textContent.replace(":", "");
  var minLength = 3;
  var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{3,}$/g;
  switch (true) {
    case password === "" ||
      password.length < minLength ||
      !passwordRegex.test(password):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>Incorrect or invalid${label}`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}
/**
 * validateEmailLogin
 * @returns true if login email properly formatted
 */
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
  switch (true) {
    case email === "" || email.length > length || !emailRegex.test(email):
      validateInput(
        errorIcon,
        successIcon,
        errorMSG,
        `<br>Incorrect or invalid${label}`
      );
      break;
    default:
      validateInput(successIcon, errorIcon, errorMSG, "");
      return true;
  }
}

/*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
2. Input Validation
-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#*/
/**
 * validateInput
 * @param {*} show - removes the class of hidden to show the element passed
 * @param {*} hide - add the class of hidden to hide the element passed
 * @param {*} msgContainer - element that will hold the msg
 * @param {*} msg - message to be placed in the msgContainer element
 */
function validateInput(show, hide, msgContainer, msg) {
  hide.classList.add("hidden");
  show.classList.remove("hidden");
  msgContainer.innerHTML = msg;
}
