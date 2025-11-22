const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public"))); 
app.use(express.urlencoded({ extended: true }));


main()
.then(()=>{console.log("connection sucessfull!!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

app.get("/chats",async(req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
app.post("/chats",async(req,res)=>{
    let {sender,msg,reciver} = req.body;
    let newChat = new Chat({
        from:sender,
        msg:msg,
        to:reciver,
        created_at:new Date()
    });
    await newChat.save().then((res)=>{console.log(res)}).catch((err)=>{console.log("err")});
    res.redirect("/chats");
});
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let ch = await Chat.findById(id);
    res.render("edit.ejs",{ch});
});
app.post("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let {msg} = req.body;
    let ch = await Chat.findByIdAndUpdate(id,{msg:msg,created_at:new Date()});
    res.redirect("/chats");
});
app.post("/chats/:id/delete",async(req,res)=>{
    let {id} = req.params;
    await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
});
app.get("/",(req,res)=>{
    res.send("root is working");
});

app.listen(8080,()=>{
    console.log("Server is listening on port 8080");
});