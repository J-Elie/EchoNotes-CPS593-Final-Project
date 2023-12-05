let noteForm = document.getElementById("noteForm");
noteForm?.addEventListener("submit", newNote);

function newNote(e) {
  e.preventDefault();

  const date = new Date()
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  let fullDate = `${month}-${day}-${year}`;
  fullTime = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  console.log(`${fullDate} || ${fullTime}`);
  let note = {
    title: document.getElementById("title").value,
    textarea: document.getElementById("textarea").value,
  };
  console.log(`title:${note.title} body:${note.textarea}`);

  let titleNav = document.getElementById("noteUL");
  titleNav.innerHTML += `<li class="noteLI">${note.title}</li>`;
  // document.getElementById('titles').value=""
}

function updateTitle() {
  var title = document.getElementById("title").value;
  let heading = document.getElementById("titleHeading");
  if (title != "") {
    heading.innerHTML = `${title}`;
  } else {
    heading.innerHTML = `New Note`;
    title = "new Note"
    console.log(title)
  }
}
function validateNote() {
  var title = document.getElementById("title").value;
  if (title == ""){
    title = "new Note"
  }
}

// function openNav() {
// }

// function closeNav() {
// }

    