import { useEffect, useState } from "react";
import handleLogin from "../../utils/api/login";
import { Navigate } from 'react-router-dom';
import Pop_Up from "../../components/Pop Up";

const Login = () => {
    
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    const [isAuthenticated, setIsAuthenticated] = useState()
    const [isShow, setIsShow] = useState(false)

    const Check = async () => {
        await handleLogin((success) => {
            if(success){
                setIsAuthenticated(success);
            }else{
                setIsShow(true)
            }
        });
    }

    return(<>
<div className='content'/>
    <div className="CBody">
        <div className="cont">  
        <div className="form">
            <form action="">
            <h1>Login</h1>
                <input  
                    type="text"
                    className="user"
                    placeholder="Username"
                    value={user}
                    onChange={e => {
                        setUser(e.target.value)
                    }}
                />
                <input
                    type="password" 
                    className="pass"
                    placeholder="Password"
                    value={pass}
                    onChange={e => {
                        setPass(e.target.value)
                    }}
                />
                <button onClick={Check} className="login">
                    <a href="/home">Login</a>
                </button>
                {
                    isAuthenticated ? <Navigate to="/home" />:
                    <Pop_Up trigger={isShow} setTrigger = {setIsShow}>
                        Wrong Device
                    </Pop_Up>
                }
            </form>
        </div>  
    </div>
</div>
</>)
}

export default Login;