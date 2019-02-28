const express = require("express")
const app = express()
const routes = require("./routes")
const routesDrugs = require("./routes/drugs/drugs")
const session = require('express-session')
const routesSymptoms = require("./routes/symptoms/symptoms")

app.set("view engine", "ejs")
app.use(express.static('css'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(session)

app.use('/', routes)
// app.use('/session' ) {}
app.use('/check', routesSymptoms )

app.listen(3000);
console.log('listening..')
