const router = require('express').Router()
const User = require('../models').User
var session = require('express-session')

router.get("/", (req, res) => {
  res.render('pages/user/register')
})
.post('/', (req, res) => {
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    username: req.body.username,
    password: req.body.password,
    gender: req.body.gender,
    birthday: req.body.birthday,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(() => {
    res.redirect('/login')
  })
  .catch((err) => {
    res.send(err)
  })
})

router.get('/login', (req, res) => {
  res.render('pages/user/login')
})
.post('/login', (res, req) => {
  User.findOne({
    where: { 
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }
  })
  .then((users) => {
    if(users) {
      res.send('has login')
    } else {
      User.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
      })
    }
  })
})

module.exports = router