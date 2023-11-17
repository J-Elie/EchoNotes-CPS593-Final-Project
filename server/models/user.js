// const con = require("./db_connect");

// async function createTable() {
//   let sql = `CREATE TABLE IF NOT EXISTS user (
//     user_id INT NOT NULL UNIQUE AUTO_INCREMENT,
//     firstName VARCHAR(30) NOT NULL,
//     lastName VARCHAR(30) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255)  NOT NULL,
//     CONSTRAINT user_pk PRIMARY KEY (user_id)
//   );`

//   await con.query(sql);  
// }

// createTable();


const users = [
  {
    user_id: 134,
    firstName: "cathy123",
    lastName: "doe",
    email: "cathy@gmail.com",
    password: "icecream"  
  },
  {
    user_id: 534,
    firstName: "bill123",
    lastName: "smith",
    email: "smith@gmail.com",
    password: "badpassword"  
   }
]

// CRUD functions
let getUsers = () => users;

function getUsers2() {
  return users;
}

// export functions so can utilize them in another
// file in application
module.exports = {getUsers, getUsers2}