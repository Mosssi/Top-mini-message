const express = require('express');
const router = express.Router();


const messages =[
  {
    text:"Hi there!",
    user:"Amando",
    added:new Date()
    },
    {
      text:"Hello,world!",
      user:"Charles",
      added:new Date()
    }
]


router.get('/',(req,res) => {
  res.render('index',{
    title:"BRIANNA  Messageboard",
    messages:messages
  });
})
router.get("/new",(req,res)=>{
  res.render("form")
})

router.get("/message/:id", (req,res) =>{
  const messageId = req.params.id;
  const message = messages[messageId];

  if(message){
    res.render("messageDetail",{
      title:"BRIANNA  Messageboard",
      heading:"Message Details",
      message:message,

    });
  }else{
    res.status(404).send("Message not found ")
  }
})

router.post('/add-message',(req,res)=>{
  const newMessage = {
    user:req.body.username,
    text:req.body.content,
    added:new Date()
  };
  messages.unshift(newMessage);
  res.redirect('/')
});

router.post('/new',(req,res) =>{
  const userName = req.body.messageUser;
  const userText = req.body.messageText;
  
  console.log(req.body);

  messages.push({ 
    text:userText , 
    user:userName, 
    added:new Date()
  })

  res.redirect('/');
})

module.exports = router;
