const express = require("express");
const app = express();
const adminRouter = require("./routes/router");
//
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
//
const mustacheExpress = require("mustache-express");
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');
//
app.use('/', adminRouter);
//
app.listen(3000, () => console.log("My Ninja We Init!"));