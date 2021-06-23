import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useHistory } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import Teacher from "../Teacher/Teacher";

const Login = () => {
  const email_error_banner = document.createElement("p");
  email_error_banner.className = "email-error-banner";
  const password_error_banner = document.createElement("p");
  password_error_banner.className = "password-error-banner";
  const form = document.querySelector("form");
  const email_label = document.querySelector("#email-label");
  const password_label = document.querySelector("#password-label");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disable, setDisable] = useState(false);

  

  let history = useHistory();

  const getEmailValue = (e) => {
    setEmail(e.target.value);
  }

  const getPasswordValue = (e) => {
    setPassword(e.target.value);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const teacher_information = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      "http://localhost:5500/login",
      teacher_information
    );
    const data = response.data;
    if (data.type == "email error") {
      setDisable(false);
      if (form.contains(document.querySelector(".email-error-banner")) == false) {
        email_error_banner.textContent = data.message;
        email_label.insertAdjacentElement("afterend", email_error_banner);
      }
      if (form.contains(document.querySelector(".password-error-banner")) == true) {
        document.querySelector(".password-error-banner").remove();
      }
    } else if (data.type == "password error") {
      setDisable(false);
      if (form.contains(document.querySelector(".password-error-banner")) == false) {
        password_error_banner.textContent = data.message;
        password_label.insertAdjacentElement("afterend", password_error_banner);
      }
      if (form.contains(document.querySelector(".email-error-banner")) == true) {
        document.querySelector(".email-error-banner").remove();
      }
    } else {
      localStorage.setItem("token", data);
      history.push("/user");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="email-input">
            <label id="email-label">Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              onChange={getEmailValue}
            />
          </div>
          <br />
          <div className="password-input">
            <label id="password-label">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={getPasswordValue}
            />
          </div>
          <br />

          <button disabled={disable} className="submit-btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
