const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS note(
    note_id INT NOT NULL UNIQUE AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL DEFAULT 'New note',
    note LONGTEXT NOT NULL,
    date_edited TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
    user_id INT NOT NULL,
    CONSTRAINT note_pk PRIMARY KEY (note_id),
    CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES user(user_id)
  );`

  await con.query(sql);  
}

createTable();