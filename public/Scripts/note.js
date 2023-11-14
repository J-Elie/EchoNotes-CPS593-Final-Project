let noteForm = document.getElementById("noteForm")
noteForm?.addEventListener('submit', newNote)

function newNote(e) {
    e.preventDefault();
    let note = {
        title: document.getElementById("title").value,
        textarea: document.getElementById("textarea").value,
      }
    console.log(note.title, note.textarea)
}