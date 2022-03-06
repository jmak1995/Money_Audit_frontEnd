// import res from "express/lib/response";
// import { redirect } from "express/lib/response";
import React from "react";
// import { FaWindows } from "react-icons/fa";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [userdata, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const loginHandler = () => {
    fetch("http://localhost:4000/login", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
      credentials: "include",
    })
      .then((res) => {
        navigate("/");
        return res.json();
      })
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(data.error);
        }
      });
  };
  const onChange = (e, key) => {
    setUserData({ ...userdata, [key]: e });
  };
  return (
    <div className="form">
      <div className="imgcontainer">
        <img src="icon.png" alt="Avatar" className="avatar" />
      </div>
      <div className="loginContainer">
        <label for="Username">
          <b>Username</b>
        </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          required
          onChange={(e) => onChange(e.target.value, "username")}
        />

        <label for="Password">
          <b>Password</b>
        </label>
        <input
          type="text"
          placeholder="Enter Password"
          name="psw"
          required
          onChange={(e) => onChange(e.target.value, "password")}
        />

        <button className="button" onClick={loginHandler}>
          Login
        </button>
        {/* <label>
          <input type="checkbox" checked="checked" name="remember" /> Remember
          me
        </label> */}
      </div>
    </div>
  );
};

export default Login;
