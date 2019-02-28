const express = require("express")
const app = express()
const routes = require("./routes")
const routesDrugs = require("./routes/drugs/drugs")
const session = require('express-session')
const routesSymptoms = require("./routes/symptoms/symptoms")

const port = 3000

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.static('css'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
// app.use(session)

app.use('/', routes)
// app.use('/session' ) {}
app.use('/check', routesSymptoms )

app.listen(port, () => {
  console.log(`running in port ${port}`)
});

