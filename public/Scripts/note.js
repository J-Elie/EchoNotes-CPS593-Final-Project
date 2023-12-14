import { fetchData, getCurrentUser } from "./main.js";

let noteForm = document.getElementById("noteForm");
noteForm?.addEventListener("submit", newNote);
function newNote(e) {
  e.preventDefault();
  let user = getCurrentUser();
  let note = {
    note_title: validateTitle(),
    note_body: document.getElementById("textarea").value,
    user_id: user.user_id,
  };
  let titleNav = document.getElementById("noteUL");
  titleNav.innerHTML = "";

  fetchData("/notes/addNote", note, "POST")
    .then((data) => {
      // console.log(data);
      getAllNotes();
    })
    .catch((err) => {
      console.log(err);
    });
}
let navNewNote = document.getElementById('noteNavNewNoteBtn')
navNewNote?.addEventListener("click", resetPage);
function resetPage(){
  location.reload();
}
/**
 *
 */
function getAllNotes() {
  let user = getCurrentUser();

  let titleNav = document.getElementById("noteUL");
  titleNav.innerHTML = "";

  fetchData("/notes/getAllUserNotes", { user_id: user.user_id }, "POST")
    .then((data) => {
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        // let lastEditedDate = data[i].edit_date.trim().substring(0, 10);
        // let lastEditedTime = data.edit_date.trim().substring(11, 16);
        titleNav.innerHTML += `
        <li id=${data[i].note_id} class="noteLI">
          <div class="titleDiv">${data[i].note_title}</div>
          <div class="dateDiv">last edit on ${data[i].edit_date.trim().substring(0, 10)} at ${data[i].edit_date.trim().substring(11, 16)}</div>
        </li>
        <li class = "spacerLI"></li>`;
        // document.getElementById(`${data[i].note_id}`).addEventListener('click', testFunction)
      }
      document.querySelectorAll("li").forEach((element) => {
        let noteid = parseInt(element.getAttribute("id"));
        element.addEventListener("click", () => {
          fetchData("/notes/viewNote", { note_id: noteid }, "POST")
            .then((data) => {
              // console.log(data)
              console.log(
                `this should be the note you clicked on title ${data.note_title}`
              );
              let lastEditedDate = data.edit_date.trim().substring(0, 10);
              let lastEditedTime = data.edit_date.trim().substring(11, 16);
              // oldNoteTitleHeading.innerHTML = `${data.note_title} <br><h6>Last Edited on ${lastEditedDate} at ${lastEditedTime}</h6>`
              let noteContainer = document.getElementById("noteContainer");
              noteContainer.innerHTML = `
              <div>
                <form class="noteForm" id="viewNoteForm">
                    <h2 class="newNoteHeading" id="titleHeading">${data.note_title}</h2>
                    <h6 class="newNoteSubHeading">Last Edited on ${lastEditedDate} at ${lastEditedTime}</h6>
                    <div class="input">
                        <label for="title">Title:</label>
                        <input 
                            type="text" 
                            name="title" 
                            id="title"  
                            placeholder="${data.note_title}"
                            value = "${data.note_title}"
                            disabled = true>
                    </div>
                    <div class="textareaContainer">
                        <textarea 
                            name="note" 
                            rows="4" 
                            cols="50"
                            id="textarea"
                            placeholder="${data.note_body}"
                            disabled = true
                            >${data.note_body}</textarea>
                    </div>
                    <div class="formBottom">
                        <div class="submitForm" id="submitNoteFormOld">
                        <button class="submitButton" id = "editOldNoteBtn">Edit Note</button><div class = navSpacer></div><button class="submitButton" id="deleteOldNoteBtn">Delete Note</button>
                        </div>
                    </div>
                </form>

            </div>
              `;

              // this will ba changed later so that the user is kept on the same note after canceling
              let deleteNoteBTN = document.getElementById("deleteOldNoteBtn");
              deleteNoteBTN?.addEventListener("click", deleteNote);
              function deleteNote() {
                if (confirm("Are you sure you want to delete this note?")) {
                  fetchData(
                    "/notes/deleteNote",
                    { note_id: data.note_id },
                    "DELETE"
                  )
                    .then((data) => {
                      if (!data.message) {
                        console.log(data.success);
                        getAllNotes();
                        window.location.href = "note.html";
                      }
                    })
                    .catch((error) => {
                      const errText = error.message;
                      // document.querySelector("#profile div p.error").innerHTML = errText;
                      console.log(`Error! ${errText}`);
                    });
                }
              }

              let editNoteBTN = document.getElementById("editOldNoteBtn");
              editNoteBTN?.addEventListener("click", editNoteMode);
              function editNoteMode(e) {
                e.preventDefault();
                // let oldNoteTitle = document.getElementById('titleOld')
                document.getElementById("title").disabled = false
                document.getElementById("textarea").disabled =false
                console.log(`input should be enabled`)
                let editNoteFromBTN = document.getElementById('submitNoteFormOld')
                editNoteFromBTN.innerHTML =`
                <button class="submitButton" id = "editSaveBtn">Save</button>
                <div class = navSpacer></div>
                <button class="submitButton" id="editSaveAsBtn">Save As</button>
                <div class = navSpacer></div>
                <button class="submitButton" id="editCancelBtn">cancel</button>`;

                let editSaveBtn = document.getElementById("editSaveBtn");
                editSaveBtn?.addEventListener("click", editNote);
                function editNote(e){
                  e.preventDefault();
                  let titleEdit = document.getElementById('title').value
                  let bodyEdit = document.getElementById('textarea').value
                  console.log(`this is the new data ${titleEdit} and ${bodyEdit}`)
                  fetchData(
                    "/notes/editNote",
                    { note_id: data.note_id, note_title: titleEdit, note_body: bodyEdit},
                    "PUT"
                  )
                    .then((data) => {
                      if (!data.message) {
                        getAllNotes();
                        // window.location.href = "profile.html";
                      }
                    })

                    .catch((error) => {
                      const errText = error.message;
                      document.querySelector(".errorMSG").innerHTML = errText;
                      console.log(`Error! ${errText}`);
                    });
        
                }
                // 
              }
              // getAllNotes();
            })
            .catch((err) => {
              console.log(err);
            });
          // let oldNoteTitle = document.getElementById("titleHeading");
          // oldNoteTitle.innerHTML = `${element.getAttribute(
          //   "data[i].note_title"
          // )}`;
          // console.log(element.getAttribute("id"));
        });
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

getAllNotes();

let noteTitle = document.getElementById("title");
noteTitle?.addEventListener("keyup", updateTitle);
export function updateTitle() {
  var title = document.getElementById("title").value;
  let heading = document.getElementById("titleHeading");
  if (title != "") {
    heading.innerHTML = `${title}`;
  } else {
    heading.innerHTML = `New Note`;
    title = "new Note";
  }
}
export function validateTitle() {
  var title = document.getElementById("title").value;
  if (title == "") {
    title = "New Note";
  }
  return title;
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
