const router = require('express').Router()
const Model = require('../../models')
const nodemailer = require('nodemailer')

router.get('/', (req, res) => {
    Model.Symptom.findAll()
    .then(symptomList => {
        Model.User.findByPk(req.session.user)
        .then((user) => {
            res.render('pages/symptoms', {user:user, symptomList:symptomList})
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/showall' , (req, res) => {
    Model.User.findOne( {
        where : {id : req.session.user},
        include : [
            {model : Model.Symptom}
        ]
    })
    .then((datas) => {
        // res.send(datas)
        res.render('showall', {datas:datas})
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/', (req, res) =>{
    for (let i = 0; i < req.body.symptoms.length; i++) {
        let detail = {
            UserId : req.session.id,
            SymptomId : req.body.symptoms[i]
        }        
        Model.UserSymptom.create(detail)
        .then(() => {})
        .catch(err => {
            res.send(err)
        }) 
    }
    res.redirect('/check/showall')
})



module.exports = router