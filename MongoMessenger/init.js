const mongoose = require("mongoose");
const Chat = require("./models/chat.js");


main()
.then(()=>{console.log("connection sucessfull!!")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}
const chatsarr = [
  {
    from: "Ghanavi",
    to: "Sinchana",
    msg: "Sinchana you are so kind!!",
    created_at: new Date(),
  },
  {
    from: "Sinchana",
    to: "Ghanavi",
    msg: "Thank you, Ghanavi! You’re amazing too!",
    created_at: new Date(),
  },
  {
    from: "Ghanavi",
    to: "Sinchana",
    msg: "How was your day?",
    created_at: new Date(),
  },
  {
    from: "Sinchana",
    to: "Ghanavi",
    msg: "Pretty good! Just finished coding practice.",
    created_at: new Date(),
  },
  {
    from: "Ghanavi",
    to: "Sinchana",
    msg: "Nice! Keep it up 💪",
    created_at: new Date(),
  },
  {
    from: "Sinchana",
    to: "Ghanavi",
    msg: "Haha thanks 😄",
    created_at: new Date(),
  },
  {
    from: "Ghanavi",
    to: "Sinchana",
    msg: "Want to catch up tomorrow?",
    created_at: new Date(),
  },
  {
    from: "Sinchana",
    to: "Ghanavi",
    msg: "Sure, let’s do it!",
    created_at: new Date(),
  },
  {
    from: "Ghanavi",
    to: "Sinchana",
    msg: "Cool, I’ll text you the details later.",
    created_at: new Date(),
  },
  {
    from: "Sinchana",
    to: "Ghanavi",
    msg: "Perfect 👌 see you then!",
    created_at: new Date(),
  },
];

Chat.insertMany(chatsarr);
