//* Getters
const { GetAll, GetByID } = require("./Getters")

//! Deletes
const { DeleteAll, DeleteByID } = require("./Deletes")

//? Puts
const UpdateUserByID = require("./Puts")

//TODO 
const CreateNewUser = require("./Posts")


// Send

module.exports = {
    GetAll, GetByID,
    DeleteAll, DeleteByID,
    UpdateUserByID,
    CreateNewUser
}