const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS notes(
    note_id INT NOT NULL UNIQUE AUTO_INCREMENT,
    note_title VARCHAR(100) NOT NULL DEFAULT 'New note',
    note_body LONGTEXT NOT NULL,
    edit_date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    CONSTRAINT note_pk PRIMARY KEY (note_id),
    CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users(user_id)
  );`

  await con.query(sql);  
}

createTable();

async function getAllNotes() {
  let sql = `SELECT * FROM notes;`
  return await con.query(sql);
}

// addNote (Create) New note
async function addNote(note) {
  let sql = `
    INSERT INTO notes(note_title, note_body, user_id)
    VALUES("${note.note_title}", "${note.note_body}", "${note.user_id}")
  `
  await con.query(sql)
  const newNote = await getNote(note.note_id)
  return newNote[0]
}

// viewNote (read) an existing note
async function viewNote(note) {
  let noteResult = await getNote(note.note_id)
  if(!noteResult[0]) throw Error("no note is associated with id")
  // if(noteResult[0].user_id != note.user_id) throw Error("you have no notes with that title")

  return noteResult[0]
}

// editNote (update) a note function
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//this is not working
//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
async function editNote(note) {
  let noteResult = await getNote(note.note_id);
  let sql = `
    UPDATE notes 
    SET note_title = "${note.note_title}",
    SET note_body = "${note.note_body}
    WHERE note_id = ${note.note_id};
  `
  await con.query(sql)
  noteResult = await getNote(note)
  return noteResult[0]
}


// deleteNote (delete) existing note
async function deleteNote(note) {
  let sql = `
    DELETE FROM notes
    WHERE note_id = ${note.note_id}
  `
  await con.query(sql);
}


// Useful functions
async function getNote(note_id) {
  let sql = `
    SELECT * FROM notes 
    WHERE note_id = "${note_id}" 
  `
  return await con.query(sql)
}

// const notes = [
//   {
//     note_id: 134,
//     title: "good",
//     note:"afternoon",
//     date_edited: "2020-08-31-8-33-15",
//     user_id: 534
//   },
//   {
//     note_id: 534,
//     title: "lorem",
//     note:"ipsum",
//     date_edited: "2020-08-31-8-33-15",
//     user_id: 134
//    },
//    {
//     note_id: 12,
//     title: "hello",
//     note:"world",
//     date_edited: "2023-11-15-8-33-15",
//     user_id: 134
//    }
// ]

// // CRUD functions
// let getNotes = () => notes;

// function getNotes2() {
//   return notes;
// }

// export functions so can utilize them in another file in application
module.exports = {getAllNotes, addNote, viewNote, editNote, deleteNote }