
import { fetchData, getCurrentUser} from "./main.js";

let noteForm = document.getElementById("noteForm");
noteForm?.addEventListener("submit", newNote);

function newNote(e) {
  e.preventDefault();
  let user = getCurrentUser();

  let note = {
    note_title: validateTitle(),
    note_body: document.getElementById("textarea").value,
    user_id: user.user_id
  };
  console.log(`title:${note.note_title} body:${note.note_body}`);
  console.log(`users id:${user.user_id} note user id:${note.user_id}`);
  let titleNav = document.getElementById("noteUL");
  titleNav.innerHTML += `<li class="noteLI">${note.note_title}</li>`;
  let sideNavLi = document.getElementsByClassName('noteLI')
  sideNavLi.classList.add(`u${note.note_id}`);
  console.log(`this should be the note id ${note.note_id}`)

  fetchData("/notes/addNote", note, "POST")
}
let noteTitle = document.getElementById('title')
noteTitle?.addEventListener("keyup", updateTitle);
export function updateTitle() {
  var title = document.getElementById("title").value;
  let heading = document.getElementById("titleHeading");
  if (title != "") {
    heading.innerHTML = `${title}`;
  } else {
    heading.innerHTML = `New Note`;
    title = "new Note"
  }
}

export function validateTitle() {
  var title = document.getElementById("title").value;
  if (title == ""){
    title = "New Note"
  }
  return title
}

// function openNav() {
// }

// function closeNav() {
// }

    


// function readNotes(e) {
//     fetchData("/getAllNotes", notes, "GET")
//     console.log(data)

// }
// readNotes()