const express = require("express")
const app = express()
const routes = require("./routes")
var session = require('express-session')

app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)

app.listen(3000);
