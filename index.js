const express = require("express");
const path = require("path");
const app = express();

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));


const messages = [
  {
    text:"Hi there!",
    user:"Amando",
    added:new Date()
  },
  {
    text:"Hello world!",
    usr:"Charles",
    added:new Date()
    
  }
]


app.get("/",(req,res) =>{
  res.render("index", { title: "Mini Message Board", messages: messages });
})


const PORT = 30000;
app.listen(PORT, () =>{
  console.log(`Server is running on port ${PORT}`);
})