// const con = require("./db_connect");

// async function createTable() {
//   let sql = `CREATE TABLE IF NOT EXISTS note(
//     note_id INT NOT NULL UNIQUE AUTO_INCREMENT,
//     title VARCHAR(20) NOT NULL DEFAULT 'New note',
//     note LONGTEXT NOT NULL,
//     date_edited TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
//     user_id INT NOT NULL,
//     CONSTRAINT note_pk PRIMARY KEY (note_id),
//     CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES user(user_id)
//   );`

//   await con.query(sql);  
// }

// createTable();



const notes = [
  {
    note_id: 134,
    title: "good",
    note:"afternoon",
    date_edited: "2020-08-31-8-33-15",
    user_id: 534
  },
  {
    note_id: 534,
    title: "lorem",
    note:"ipsum",
    date_edited: "2020-08-31-8-33-15",
    user_id: 134
   },
   {
    note_id: 12,
    title: "hello",
    note:"world",
    date_edited: "2023-11-15-8-33-15",
    user_id: 134
   }
]

// CRUD functions
let getNotes = () => notes;

function getNotes2() {
  return notes;
}

// export functions so can utilize them in another
// file in application
module.exports = {getNotes, getNotes2}