// setting nav based on logged in status
let nav = document.querySelector("header nav");
if (getCurrentUser()) {
  nav.innerHTML = `
    <a href="home.html" class="logoNavLink">
      <img src="Images/Green Logo With Title.png" alt="EchoNotes logo" class="logoHomeImg">
    </a>
    <ul>
      <li><a href="home.html" class="navLink" id="home">Home</a></li>
      <li><a href="note.html" class="navLink" id="note">Notes</a></li>
      <li><a href="profile.html" class="navLink" id="profile">Profile</a></li>
    </ul>
    <ul class="navSpacer">
      <li><a href="home.html" class="navLink" id = "logout">Sign Out</a></li>
    </ul> `
    if (window.location.pathname == "/home.html") {
      document.getElementById('home').classList.add("currentPage");
    }else if (window.location.pathname == "/note.html") {
      document.getElementById('note').classList.add("currentPage");
    }
    else if (window.location.pathname == "/profile.html") {
      document.getElementById('profile').classList.add("currentPage");
    }
} else {
  nav.innerHTML = `
    <a href="home.html" class="logoNavLink">
      <img src="Images/Green Logo With Title.png" alt="EchoNotes logo" class="logoHomeImg">
    </a>
    <ul>
      <li><a href="home.html" class="navLink" id="home">Home</a></li>
      <li><a href="register.html" class="navLink" id="register">Register</a></li>
      <li><a href="login.html" class="navLink" id="login">Login</a></li>
    </ul>
    <div class="navSpacer"></div> `
    if (window.location.pathname == "/home.html") {
      document.getElementById('home').classList.add("currentPage");
    }else if (window.location.pathname == "/register.html") {
      document.getElementById('register').classList.add("currentPage");
    }
    else if (window.location.pathname == "/login.html") {
      document.getElementById('login').classList.add("currentPage");
    }
}
// logout user
let logoutBtn = document.getElementById("logout")
if(logoutBtn) logoutBtn.addEventListener('click', logout);

// local storage for user
export function setCurrentUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user"));
}

export function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

export function removeCurrentUser() {
  localStorage.removeItem('user')
}

// Fetch method implementation:
export async function fetchData(route = "", data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (response.ok) {
    return await response.json();
  } else {
    throw await response.json();
  }
}
