const express = require("express")
const app = express()
const routes = require("./routes")

const port = 3000

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', routes)

app.listen(port, () => {
  console.log(`running in port ${port}`)
});
