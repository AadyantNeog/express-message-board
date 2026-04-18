const {Router} = require('express')
const indexRouter = Router();

const controllers = require("../controllers")

indexRouter.get("/", controllers.getAllMessage)
indexRouter.get("/new", controllers.getNewMessage)
indexRouter.post("/new", controllers.postNewMessage)

module.exports = indexRouter;