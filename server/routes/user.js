const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const users = await User.getUsers();
    console.log(users)
    res.send(users); 
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

//CORS middleware
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
    next();
  });

  app.use('/users', userRoutes)

  app.get('*', function (req, res) {
    res.sendFile(path.resolve(__dirname + "/public/bmi.html"))
  })

module.exports = router

