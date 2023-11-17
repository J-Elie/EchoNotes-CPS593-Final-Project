let noteForm = document.getElementById("noteForm")
noteForm?.addEventListener('submit', newNote)

function newNote(e) {
    e.preventDefault();
    let note = {
        title: document.getElementById("title").value,
        textarea: document.getElementById("textarea").value,
      }
    console.log(`title:${note.title} body:${note.textarea}`)
}

function updateTitle(){
  var title = document.getElementById('title').value;
  let heading = document.getElementById('titleHeading')
  if (title != ""){
    heading.innerHTML = 
    `${title}`
  }
  else{
    heading.innerHTML = 
    `New Note`
  }
}

// function openNav() {
// }

// function closeNav() {
// }