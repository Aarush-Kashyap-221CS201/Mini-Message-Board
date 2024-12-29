const {Router} = require('express');
const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    },
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      },
      {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
      },
      {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
      }
  ];
  

indexRouter.post("/form",function(req,res){
    const messageText=req.body.message;
    const messageUser=req.body.author;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
})

indexRouter.get("/message/:id",function(req,res){
    res.render('message',{message:messages[parseInt(req.params.id)]});
})

indexRouter.get("/form",function(req,res){
    res.render('form');
})

indexRouter.get("/",function(req,res){
    res.render('index',{ messages:messages });
})

module.exports=indexRouter;