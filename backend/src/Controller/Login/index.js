const Users = require("../../Models/Users")

const Login = async (req, res, next) => {
    console.log("Post -> Login")
    const { user, pass } = req.body
    
    console.log("ID : " + user +  "\n " + "PASS : " + pass)
    try{
        const obj = await Users.findOne({
            where:{
                user : user,
                pass : pass
            }
        });

        console.log("Data : "+ obj)
        return obj ? 
        res.status(200).json({
            message : "Successful!",
            send : true
        })
        :
        res.status(400).json({
            message : "Error : Not Found!",
            send : false
        })
    }catch(err){
        res.status(500).json({
            message : "Error : With Server!",
            error : err.message
        })
    }
}

module.exports = Login