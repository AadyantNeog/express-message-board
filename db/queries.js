const pool = require("./pool")
async function selectAllMessages() {
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}
async function insertNewMessage(mssg, author){
    await pool.query("INSERT INTO messages (message, author) VALUES ($1, $2);", [`${mssg}`,`${author}`]);
}

module.exports = {
    selectAllMessages,
    insertNewMessage
}