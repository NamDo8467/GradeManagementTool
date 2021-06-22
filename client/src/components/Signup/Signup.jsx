import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disable, setDisable] = useState(false);
  const [success, setSuccess] = useState();

  const getNameValue = (e) => {
    setName(e.target.value);
  };
  const getEmailValue = (e) => {
    setEmail(e.target.value);
  };

  const getPasswordValue = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setDisable(true);
    const teacherInfo = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5500/signup", teacherInfo)
      .then((res) => {
        setSuccess(res.data);
      })
      .catch((err) => console.log(err));
  };
  if (success) {
    return (
      <div>
        <h1>{success}</h1>
        <a href="/login">Login</a>
        <br />
        <br />
        <a href="/">Home page</a>
      </div>
    );
  }
  return (
    <form onSubmit={handleSignUp}>
      <div className="container">
        <div className="name-input">
          <label>Name: </label>
          <input type="text" id="name" name="name" onChange={getNameValue} />
        </div>
        <br />
        <div className="email-input">
          <label>Email: </label>
          <input type="text" id="email" name="email" onChange={getEmailValue} />
        </div>
        <br />
        <div className="password-input">
          <label>Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={getPasswordValue}
          />
        </div>
        <br />

        <button disabled={disable} className="submit-btn" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};
export default Signup;
