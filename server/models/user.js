const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS user (
    user_id INT NOT NULL UNIQUE AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)  NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (user_id)
  );`

  await con.query(sql);  
}

createTable();


// const users = [
//   {
//    userId: 134,
//    userName: "cathy123",
//    password: "icecream"  
//   },
//   {
//     userId: 534,
//     userName: "bill123",
//     password: "badpassword"  
//    },
//    {
//     userId: 654,
//     userName: "jess",
//     password: "password"  
//    }
// ]

// let getUsers = () => users

module.exports = { getUsers}