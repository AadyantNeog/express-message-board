const express = require('express')
const app = express()
const path = require("node:path");
const indexRouter = require('./routers/indexRouter')


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter)

app.listen(3000);