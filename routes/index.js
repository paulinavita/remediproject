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
  let userFound = null
  User.findOne({
    where: {
      username: req.body.username,
    }
  })
  .then((user) => {
    console.log(user, '====')
    if (!user) {
      return res.redirect('/login')
    }
    userFound = user
    bcrypt
    .compare(req.body.password, user.password)
    .then(doMatch => {
      if (doMatch) {
        req.session.user = user.id
        res.redirect('/check')
        // console.log(req.session.user)
        // res.send(req.session)
      } else {
        res.send('gaaagal login')
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
})

//POST PAGE
router.post('/login/add', (req, res) => {
  let detail = {
    name : req.body.name,
    description : req.body.description,
    drugName : req.body.drugName,
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

// POST PAGE
router.post('/login/add' , (req,res) => {
  let detail = {
      name : req.body.name,
      description : req.body.description,
      price : req.body.price,
      drugName : req.body.drugName,
      brandName : req.body.brandName,
      updatedAt : new Date()
    }
    Model.Symptom.create(detail)
    .then(() => {
      res.redirect('/login/list')
    })
    .catch(err => {
      res.send(err)
    })
})


//EDIT GET
router.get('/login/edit/:id', (req, res) => {
  let id = req.params.id
  Model.Symptom.findByPk(id)
  .then(data => {
    res.render('pages/user/edit.ejs', {
      data : data
    })
  })
  .catch(err => {
    res.send(err)
  })
})


//EDIT POST
router.post('/login/edit/:id', (req, res) => {
  let id = req.params.id
  Model.Symptom.findByPk(id)
  .then((data) => {
    data.name = req.body.name,
    data.description = req.body.description,
    data.drugId = data.id,
    data.price = req.body.price,
    data.drugName = req.body.drugName,
    data.brandName = req.body.brandName
    data.updatedAt = new Date()
    return data.save()
  })
  .then(() => {
    res.redirect('/login/list')
  })
  .catch(err => {
    res.send(err)
  })
})


//DELETE

router.get('/login/delete/:id', (req, res) => {
  let id = req.params.id
  Model.Symptom.destroy({where : {id : id}})
  .then(() => {
    res.redirect('/login/list')
  })
  .catch(err => {
    res.send(err)
  })
})



module.exports = router