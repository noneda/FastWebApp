import axios from "../config"

const handleLogin = async (onSuccess, user, pass) => {
    try{
        const res = await axios.post('/Auth/LogIn', {
            user, pass
        })
        if(res.status === 200){
            const { token } = res.data.set
            sessionStorage.setItem('token', token)
            onSuccess(true)

        }else{ 
            onSuccess(false)
        }
    }catch(err){
        onSuccess(false)
    }
}

export default handleLogin;