const router = require('express').Router()
const User = require('../models').User
const bcrypt = require("bcrypt")
const Model = require('../models')

router.get("/", (req, res) => {
  res.render('pages/user/register')
})
.post('/', (req, res) => {
  return bcrypt
  .hash (req.body.password, 12)
  .then(hashedPassword => {
    return User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: hashedPassword,
      gender: req.body.gender,
      birthday: req.body.birthday,
      email: req.body.email,
      createdAt: new Date(),
      updatedAt: new Date()
    })
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
  .then((user) => {
    if (!user) {
      return res.redirect('/login')
    } 
    bcrypt
    .compare(req.body.password, user.password)
    .then(doMatch => {
      if (doMatch) {
        res.render('pages/main/main', {session :req.session})
      } else {
        res.send('gagal login')
      }
    })
    .catch((err) => {
      res.send(err)
    })
  })
})

//MENGAMBIL GET ADD PAGE
router.get('/login/add', (req, res) => {
  res.render('pages/user/add', {
    message : 'Dapat menambahkan penyakit dan medikasi disini'
  })
  .catch((err) => {
    res.send(err)
  })
})

//POST PAGE
router.post('/login/add', (req, res) => {
  let detail = {
    symptomName : req.body.symptomName,
    description : req.body.description,
    drugName : req.body.drugName,
    drugId :req.body.symptomId,
    price : req.body.price,
    brandName : req.body.brandName,
  }
  Model.Symptom.create(detail)
  .then(() => {
    res.redirect('/login/list')
  })
  .catch(err => {
      res.send(err)
  }) 
})


//LIST ALL DATAS
router.get('/login/list', (req, res) => {
  Model.Symptom.findAll()
  .then((list) => {
    // res.send(list)
    res.render('pages/user/list', {list:list})
  })
})




module.exports = router