const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL UNIQUE AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255)  NOT NULL,
    CONSTRAINT user_pk PRIMARY KEY (user_id)
  );`
  await con.query(sql);  
}

createTable();


// CRUD
// Read - Login User 

// Testing out login function
// let newUser = {
//   email: "j.doe@gmail.com",
//   password: "password"
// }

// login(newUser);

async function getAllUsers() {
  let sql = `SELECT * FROM users;`
  return await con.query(sql);
}

// Register (Create) New User
async function register(user) {
  let userResult = await getUser(user.email)
  if(userResult.length > 0) throw Error("email already in use!!")

  let sql = `
    INSERT INTO users(first_name, last_name, email, password)
    VALUES("${user.first_name}", "${user.last_name}", "${user.email}", "${user.password}")
  `

  await con.query(sql)
  const newUser = await getUser(user.email)
  return newUser[0]
}

// Login (read) an existing User
async function login(user) {
  let userResult = await getUser(user.email)
  if(!userResult[0]) throw Error("no account is associated with that email")
  if(userResult[0].password != user.password) throw Error("Password Incorrect")

  return userResult[0]
}

// edit (update) an email function
async function editUserEmail(user) {
  let userResult = await getUser(user.email);
  if(userResult.length > 0) throw Error("Email already in use");

  let sql = `
    UPDATE users 
    SET email = "${user.email}"
    WHERE user_id = ${user.user_id};
  `

  await con.query(sql)
  userResult = await getUser(user.email)
  return userResult[0]
}


// deleteUser (delete) existing User
async function deleteUser(user) {
  let sql = `
    DELETE FROM users
    WHERE user_id = ${user.user_id}
  `
  await con.query(sql);
}


// Useful functions
async function getUser(email) {
  let sql = `
    SELECT * FROM users 
    WHERE email = "${email}" 
  `
  return await con.query(sql)
}

async function getUserById(id) {
  let sql = `
    SELECT * FROM users 
    WHERE user_id = ${id} 
  `
  return await con.query(sql)
}


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const users = [
//   {
//     user_id: 134,
//     firstName: "cathy123",
//     lastName: "doe",
//     email: "cathy@gmail.com",
//     password: "icecream"  
//   },
//   {
//     user_id: 534,
//     firstName: "bill123",
//     lastName: "smith",
//     email: "smith@gmail.com",
//     password: "badpassword"  
//    },
//    {
//     user_id: 789,
//     firstName: "colin",
//     lastName: "Miller",
//     email: "Miller@gmail.com",
//     password: "123abc"  
//    }
// ]

// let getUsers = () => users;

module.exports = {login, register, getAllUsers,deleteUser,editUserEmail, getUserById}


