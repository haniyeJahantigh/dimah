import React, { useEffect, useState } from "react";
import "./Login.css";
import dimahLogo from "../../assets/img/dimah.jpeg"
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useHistory } from 'react-router-dom';

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://188.121.120.127/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token)
        res.data.user.isAdmin ? history.push("/dashboard") : history.push("/form") 
      });
  };
  
  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="h-100 w-100 d-flex justify-content-center align-items-center login">
      <div className="loginForm">
        <div className="w-100 d-flex justify-content-center mb-3">
          <img src={dimahLogo} alt="" width="80px" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3 w-100">
            <input
              type="text"
              className="form-control w-100"
              placeholder="نام کاربری"
              value={username}
              name={username}
              onChange={handleUsername}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="رمز عبور"
              value={password}
              name={password}
              onChange={handlePassword}
            />
          </div>
          <div className="d-grid gap-2 mb-3">
            <button className="btn btn-secondary" type="submit">
              ورود
            </button>
          </div>
        </form>
        {error ? (
          <div className="alert alert-danger" role="alert">
            {errorMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default withRouter(Login);
