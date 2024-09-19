const Users = require("../../../Models/Users")

const CreateNewUser = async (req, res, next) => {
    console.log("Post -> Create new User")
    const {
        get
    } = req.body;
    try{
        const obj = await Users.create(get);
        
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

module.exports = CreateNewUser