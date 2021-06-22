import React, { useEffect, useState } from "react";
import axios from "axios";
import Logout from "../Logout/Logout";
import Loading from "../Loading/Loading";
import AddStudent from "../Student/AddStudent";
import GetStudent from "../Student/GetStudent";
const Teacher = (props) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState({});
  // const [signUp, setSignUp] = useState(false)
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    axios
    .get("http://localhost:5500/user", {
      headers: {
        "auth-token": token,
      },
    })
    .then((res) => {
      localStorage.setItem("info", JSON.stringify(res.data));
      setUser(JSON.parse(localStorage.getItem("info")));
      // console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [token, user]);

  
  if (localStorage.getItem("token") == undefined) {
    window.location.replace("/login");
  }

  if (user.email == undefined) {
    return <Loading />;
  } else {
    return (
      <div style={{marginTop:'50px',display:'flex', flexDirection:'row', justifyContent:'space-around'}} className="container">
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', height: '200px'}}>
          <h1>Hello {user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Date of birth: 19/08/2000</p>
          <Logout />
          
        </div>

        <div>
          <AddStudent teacher={user.name} />
        </div>
        <div>
          <GetStudent students={user.student_detail} />
        </div>
      </div>
    );
  }
};
export default Teacher;
