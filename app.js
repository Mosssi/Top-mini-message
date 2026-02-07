require('dotenv').config();

const express = require("express");
const indexRouter = require('./routes/indexRouter');
const path = require('node:path');

const app = express();
const port = process.env.PORT || 3000;

//views
app.set("views",path.join(__dirname,"views"));
app.set('view engine', 'ejs');

//middleware
app.use(express.urlencoded({ extended:true}));
app.use(express.json());

//static files
const assetsPath = path.join(__dirname,"Assets");
app.use(express.static(path.join(__dirname,"public")));

//routes
app.use("/",indexRouter);

app.listen(port,() =>{
  console.log(`Serve is running on port ${ port}`);
})


