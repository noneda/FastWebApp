const Users = require("../../../Models/Users")

const DeleteByID = async(req , res , next) => {
    console.log("Delete -> Delete data by Id")
    const id = req.params.id;
    console.log("ID : " + id)
    try{
        const obj = await Users.destroy({
            where: {
                id : id,
            },
        });
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

const DeleteAll = async (req , res , next) => {
    console.log("Delete -> Delete All!!")
    try{
        const obj = await Users.destroy({
            truncate: true,
        });
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
    DeleteAll,
    DeleteByID
}