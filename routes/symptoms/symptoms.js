const router = require('express').Router()
const Model = require('../../models')

router.get('/', (req, res) => {
    Model.Symptom.findAll()
    
    .then(symptomList => {
        Model.User.findByPk(1)
        .then((user) => {
            res.render('pages/symptoms', {user:user, symptomList:symptomList})
        })
    })
    .catch(err => {
        res.send(err)
    })
})

router.post('/', (req, res) =>{
    for (let i = 0; i < req.body.symptoms.length; i++) {
        let detail = {
            UserId : 1,
            SymptomId : req.body.symptoms[i]
        }        
        Model.UserSymptom.create(detail)
        .then(() => {})
        .catch(err => {
            res.redirect('/user/?data=error')
        }) 
    }
    res.redirect('/user/?data=showall')
})


module.exports = router