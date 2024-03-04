import React, { useState } from "react";
import "./style.css";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(username + " " + password);
  };

  return (
    <div>
      <div
        className="login__landing"
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "60%",
          height: "80vh",
          borderRadius: "80px",
          backgroundColor: "#2f230a",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          VIETNAMESE GAME GOALS
        </h1>
      </div>
      <div className="login__container">
        <h2>WELCOME TO VIETNAMESE GAME</h2>
        <form
          className="login__form"
          type="submit"
          onSubmit={(e) => handleLogin(e)}
        >
          <label for="email">Username</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <label
              for="password"
              style={{
                position: "relative",
                display: "inline",
              }}
            >
              Password
            </label>
            <a
              href="#"
              style={{
                display: "absolute",
                fontWeight: "normal",
                color: "#2F230A",
                textDecoration: "none",
                fontSize: "12px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              left: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <input
              type="checkbox"
              style={{
                accentColor: "#2F230A",
                cursor: "pointer",
                width: "20px",
                padding: "5px",
                margin: "5px",
              }}
            />
            <label
              for="remember"
              style={{
                color: "#2F230A",
                fontWeight: "lighter",
                fontSize: "12px",
              }}
            >
              Remember me ?
            </label>
          </div>
          <button type="submit">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
