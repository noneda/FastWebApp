import axios from "axios";

const handleLogin = async (user, pass) => {
  try {
    const res = await axios.post("http://localhost:1600/API/Login", {
      user,
      pass,
    });
    if (res.status === 200) {
      return true;
    }
    if (res.status === 400) {
      return false;
    }
  } catch (err) {
    console.error("Login failed: ", err);
    return false;
  }
};

export default handleLogin;
