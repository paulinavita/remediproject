const router = require('express').Router()
const User = require('../models').User

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
.post('/login', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    }
  })
  .then((users) => {
    if(users.username == req.body.username && users.password == req.body.password) {
      res.render('pages/main/main')
    }
  })
  .catch((err) => {
    res.send(err)
  })
})

module.exports = router