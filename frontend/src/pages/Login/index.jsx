import { useState } from "react";
import handleLogin from "../../utils/api/login";
import { Navigate } from "react-router-dom";
import Pop_Up from "../../components/Pop Up";

const Login = () => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const Check = async (event) => {
    event.preventDefault();
    const success = await handleLogin(user, pass);
    console.log("API POST -> Login");

    if (success) {
      setIsAuthenticated(true);
      console.log("Successful");
    } else {
      setIsShow(true);
    }
  };

  if (isAuthenticated) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="content" />
      <div className="CBody">
        <div className="cont">
          <div className="form">
            <form onSubmit={Check}>
              <h1>Login</h1>
              <input
                type="text"
                className="user"
                placeholder="Username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <input
                type="password"
                className="pass"
                placeholder="Password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="submit" className="login">
                Login
              </button>
              {isShow && (
                <Pop_Up trigger={isShow} setTrigger={setIsShow}>
                  Login failed!
                </Pop_Up>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
