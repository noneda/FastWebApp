const Users = require("../../../Models/Users")

const GetByID = async (req, res, next) => {
    console.log("Get -> Get data by Id")
    const id = req.params.id;
    console.log("ID : " + id)
    try{
        const obj = await Users.findByPk(id);
        console.log("Data : "+ obj)
        return obj ? 
        res.status(200).json({
            message : "Successful!",
            send : obj
        })
        :
        res.status(400).json({
            message : "Error : Not Found!"
        })
    }catch(err){
        res.status(500).json({
            message : "Error : With Server!",
            error : err.message
        })
    }
}

const GetAll = async (req, res, next) => {
    console.log("Get All!!")
    try{
        const obj = await Users.findAll();
        console.log("Data : "+ obj)
        return obj ? 
        res.status(200).json({
            message : "Successful!",
            send : obj
        })
        :
        res.status(400).json({
            message : "Error : There is nothing here!!"
        })
    }catch(err){
        res.status(500).json({
            message : "Error : With Server!",
            error : err.message
        })
    }
}

module.exports = {
    GetAll,
    GetByID
}