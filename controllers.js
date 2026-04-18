const db = require("./db/queries");
async function getAllMessage(req,res){
    const rows = await db.selectAllMessages();
    res.render("index", {rows : rows})
}
async function getNewMessage(req,res){
    res.render("form")
}
async function postNewMessage(req,res){
    await db.insertNewMessage(req.body.messageText, req.body.authorName);
    res.redirect("/");
}
module.exports = {
    getAllMessage,
    getNewMessage,
    postNewMessage
}