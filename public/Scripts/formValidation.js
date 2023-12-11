  //  // I would prefer a simpler and less repetitive solution but have yet to find one
  //  // so I have duplicated the functions for onkeyup, because once type = module it is no longer defined in the html

  //  /**
  //  * validateFnameRegister
  //  * @returns true if first name field is valid
  //  */
  // function validateFnameRegisterKeyUp() {
  //   var fname = document.getElementById("fname").value;
  //   var successIcon = document.getElementById("fnameSuccess");
  //   var errorIcon = document.getElementById("fnameError");
  //   var errorMSG = document.getElementById("fnameErrorMSG");
  //   var label = document
  //     .getElementById("fnameLabel")
  //     .textContent.replace(":", "");
  //   var length = 30;
  //   var fnameRegex = /^[a-zA-Z]*$/g;
  //   switch (true) {
  //     case fname === "":
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} can not be blank`
  //       );
  //       break;
  //     case fname.length > length:
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} can not be longer than ${length} characters`
  //       );
  //       break;
  //     case !fnameRegex.test(fname):
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br> Invalid character in ${label}`
  //       );
  //       break;
  //     default:
  //       validateInput(successIcon, errorIcon, errorMSG, "");
  //       return true;
  //   }
  // }
  // /**
  //  * validateLnameRegister
  //  * @returns true if last name field is valid
  //  */
  // function validateLnameRegisterKeyUp() {
  //   var lname = document.getElementById("lname").value;
  //   var successIcon = document.getElementById("lnameSuccess");
  //   var errorIcon = document.getElementById("lnameError");
  //   var errorMSG = document.getElementById("lnameErrorMSG");
  //   var label = document
  //     .getElementById("lnameLabel")
  //     .textContent.replace(":", "");
  //   var length = 30;
  //   var lnameRegex = /^[a-zA-Z]*$/g;
  //   switch (true) {
  //     case lname === "":
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} can not be blank`
  //       );
  //       break;
  //     case lname.length > length:
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label}can not be longer than ${length} characters`
  //       );
  //       break;
  //     case !lnameRegex.test(lname):
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br> Invalid character in ${label}`
  //       );
  //       break;
  //     default:
  //       validateInput(successIcon, errorIcon, errorMSG, "");
  //       return true;
  //   }
  // }
  // /**
  //  * validateEmailRegister
  //  * @returns true if email field is valid
  //  */
  // function validateEmailRegisterKeyUp() {
  //   var email = document.getElementById("email").value;
  //   var successIcon = document.getElementById("emailSuccess");
  //   var errorIcon = document.getElementById("emailError");
  //   var errorMSG = document.getElementById("emailErrorMSG");
  //   var label = document
  //     .getElementById("emailLabel")
  //     .textContent.replace(":", "");
  //   var length = 30;
  //   var emailRegex = /^\S+@\S+$/; //very simple email regex for testing purposes
  //   switch (true) {
  //     case email === "":
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} can not be blank`
  //       );
  //       break;
  //     case email.length > length:
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label}can not be longer than ${length} characters`
  //       );
  //       break;
  //     case !emailRegex.test(email):
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br> Invalid ${label} format, standard format is <br>user@example.com`
  //       );
  //       break;
  //     // case email is in use:
  //     //   validateInput(errorIcon, successIcon, errorMSG, `<br>The ${label} you entered is already in use`)
  //     //   break;
  //     default:
  //       validateInput(successIcon, errorIcon, errorMSG, "");
  //       return true;
  //   }
  // }
  // /**
  //  * validatePasswordRegister
  //  * @returns true if the password field is valid
  //  */
  // function validatePasswordRegisterKeyUp() {
  //   var password = document.getElementById("password").value;
  //   var successIcon = document.getElementById("passwordSuccess");
  //   var errorIcon = document.getElementById("passwordError");
  //   var errorMSG = document.getElementById("passwordErrorMSG");
  //   var label = document
  //     .getElementById("passwordLabel")
  //     .textContent.replace(":", "");
  //   var minLength = 3;
  //   var passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{3,}$/g;
  //   switch (true) {
  //     case password === "" || password.length < minLength:
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} must contain at least 3 characters`
  //       );
  //       break;
  //     case !passwordRegex.test(password):
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br> Invalid ${label} character`
  //       );
  //       break;
  //     default:
  //       validateInput(successIcon, errorIcon, errorMSG, "");
  //       var confirmPassword = document.getElementById("confirmPassword").value;
  //       if (confirmPassword != "") {
  //         validateConfirmPasswordRegisterKeyUp();
  //       }
  //       return true;
  //   }
  // }
  // /**
  //  * validateConfirmPasswordRegister
  //  * @returns true if the confirm password field is valid
  //  */
  // function validateConfirmPasswordRegisterKeyUp() {
  //   var confirmPassword = document.getElementById("confirmPassword").value;
  //   var password = document.getElementById("password").value;
  //   var successIcon = document.getElementById("confirmPasswordSuccess");
  //   var errorIcon = document.getElementById("confirmPasswordError");
  //   var errorMSG = document.getElementById("confirmPasswordErrorMSG");
  //   var label = document
  //     .getElementById("confirmPasswordLabel")
  //     .textContent.replace(":", "");
  //   switch (true) {
  //     case password != confirmPassword:
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} does not match`
  //       );
  //       break;
  //     case confirmPassword == "":
  //       validateInput(
  //         errorIcon,
  //         successIcon,
  //         errorMSG,
  //         `<br>${label} can not be blank`
  //       );
  //       break;
  //     default:
  //       validateInput(successIcon, errorIcon, errorMSG, "");
  //       return true;
  //   }
  // }
  // /*-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#
  // 2. Input Validation
  // -#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#-#*/
  // /**
  //  * validateInput
  //  * @param {*} show - removes the class of hidden to show the element passed
  //  * @param {*} hide - add the class of hidden to hide the element passed
  //  * @param {*} msgContainer - element that will hold the msg
  //  * @param {*} msg - message to be placed in the msgContainer element
  //  */
  // function validateInput(show, hide, msgContainer, msg) {
  //   hide.classList.add("hidden");
  //   show.classList.remove("hidden");
  //   msgContainer.innerHTML = msg;
  // }