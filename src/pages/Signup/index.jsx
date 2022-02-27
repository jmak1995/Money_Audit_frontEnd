import "./style.css";
import React from "react";

const Signup = () => {
  const [userdata, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const signupHandler = () => {
    fetch("http://localhost:4000/signup", {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
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

        <button className="button" onClick={signupHandler}>
          signup
        </button>
        <label>
          <input type="checkbox" checked="checked" name="remember" required />{" "}
          Agree to Terms of Use
        </label>
      </div>
    </div>
  );
};

export default Signup;
