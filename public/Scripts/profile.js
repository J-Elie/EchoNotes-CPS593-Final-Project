import 
{ getCurrentUser, setCurrentUser, removeCurrentUser, logout, fetchData } 
from './main.js'


let user = getCurrentUser();

if(!user) window.location.href = "login.html";

let profile = document.getElementById("profileContainer");
profile.innerHTML = `
  <h1 id="profileHeading"> ${user.first_name}'s profile</h1>
  <div>
  <div class = "row">
    <div class="label">First Name: </div>
    <div class="usersData"> ${user.first_name}</div>
    <div class="editUserData"> <button class="editButton" id="editFName">Edit</button></div>
  </div>
  <div class = "row">
    <div class="label">Last Name: </div>
    <div class="usersData"> ${user.last_name}</div>
    <div class="editUserData"> <button class="editButton" id="editLName">Edit</button></div>
  </div>
  <div class = "row">
    <div class="label">Email: </div>
    <div class="usersData"> ${user.email}</div>
    <div class="editUserData"> <button class="editButton" id="editEmailBtn">Edit</button></div>
  </div>
  <div class = "row" id="editEmailForm"></div>
  <div class = "row">
    <div class="label">Password: </div>
    <div class="usersData"> ${user.password}</div>
    <div class="editUserData"> <button class="editButton" id="editPassword">Edit</button></div>
  </div>
</div>
<div>
<button class="btn" id="delete">Delete Account</button>
</div>
  `;
  

document.getElementById("editEmailBtn").addEventListener('click', editProfile);
document.getElementById("delete").addEventListener('click', deleteAccount);

function editProfile() {
  profile.classList.toggle("hide");
  let editForm = document.getElementById("editEmailForm");
  editForm.innerHTML = `
    <form id="EditEmailForm" class="basic-form">
      <div class="fromContent">
        <label class="label">New Email:</label>
        <input type="email" name="email" id="editEmail"  class="usersData">
        <br>
        <div class = "editFormBts">
          <input type="submit" value="Submit" class="editButton formBts">
          <button class="btn editButton formBts" id="cancel" >Cancel</button>
        </div>
      </div>
      <div class="errorMSG" id="editEmailErrorMsg"></div>
    </form>
  `;

  editForm.addEventListener('submit', editAccount)
  document.getElementById("cancel").addEventListener('click', (e) => {
    window.location.href = "profile.html";
  })
}

function editAccount(e) {
  e.preventDefault();

  let email = document.getElementById("editEmail").value;
  if(email === user.email) {
    let err = "No changes made";
    document.querySelector(".errorMSG").innerHTML = err;
  } else {
    fetchData('/users/editEmail', {user_id: user.user_id, email: email}, "PUT")
    .then((data) => {
      if(!data.message) {
        //this is not working 
        removeCurrentUser();
        setCurrentUser(data);
        let user = getCurrentUser();
        console.log(user)
        // window.location.href = "profile.html"
      }
    })
 
    .catch((error) => {
       const errText = error.message;
       document.querySelector(".errorMSG").innerHTML = errText;
       console.log(`Error! ${errText}`)
     });
  
  }
}

function deleteAccount() {
  if(confirm('Are you sure you want to delete your account???')) {
    fetchData('/users/delete', {user_id: user.user_id}, "DELETE")
    .then((data) => {
      if(!data.message) {
        console.log(data.success)
        logout();
        window.location.href = "register.html"
      }
    })
    .catch((error) => {
      const errText = error.message;
      document.querySelector("#profile div p.error").innerHTML = errText;
      console.log(`Error! ${errText}`)
    })
  }
}

