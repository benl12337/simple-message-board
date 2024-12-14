const { Router } = require("express");
const indexRouter = Router();

const messages = [
    {
        text: 'Hi there!',
        user: 'Amando',
        added: new Date()
    },
    {
        text: 'Hello World!',
        user: 'Charles',
        added: new Date()
    },
]

indexRouter.get("/new", (req,res) => {
    res.render("form")
});

indexRouter.post("/new", (req,res) => {
    messages.push({ text: req.body.messageText, user: req.body.userText, added: new Date() });
    res.redirect("/");
})

indexRouter.get("/", (req,res) => {
    res.render("index", { messages: messages })
} )


indexRouter.get("/messages/:messageId", (req,res) => {
    res.render("message", {message: messages[req.params.messageId - 1]} );
});



module.exports = indexRouter;