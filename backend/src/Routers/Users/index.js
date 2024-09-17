const {Router} = require('express')

const usr = require("../../Controller/User")

const pathUser = Router()

pathUser.get("/", usr.GetAll)
pathUser.get("/:id", usr.GetByID)

pathUser.post("/", usr.CreateNewUser)

pathUser.put("/", usr.UpdateUserByID)

pathUser.delete("/", usr.DeleteAll)
pathUser.delete("/:id", usr.DeleteByID)

module.exports = pathUser