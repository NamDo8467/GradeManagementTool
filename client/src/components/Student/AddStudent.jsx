import React, { useState } from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./AddStudent.css";

function AddStudent(props) {
  const [success, setSuccess] = useState();
  const [name, setName] = useState();
  const [grade, setGrade] = useState();
  const [subject, setSubject] = useState('Computer Science');
  const [disable, setDisable] = useState(false);
  const form = document.querySelector("form");
  const div = document.createElement("div");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    const student_information = {
      teacher: props.teacher,
      name: name,
      subject: subject,
      grade: grade,
    };
    try {
      const response = await axios.post(
        "http://localhost:5500/addStudent",
        student_information
      );
        setDisable(false)
        div.textContent = response.data;
      form.appendChild(div);
      
      
    } catch (error) {
      return <div>{error}</div>
      // console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div>
          <label htmlFor="name">Student name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(e) => setName(e.target.value)}
        
          />
        </div>
        <br />
        <div>
          <label htmlFor="subject">Subject</label>
          <select
            name="subjects"
            id="subjects"
            onChange={(e) => {
              setSubject(e.target.value)
        
            }}
          >
            <option value="Computer Science" >Computer Science</option>
            <option value="Calculus">Calculus</option>
            <option value="Advanced Function">Advanced Function</option>
            <option value="English">English</option>
            <option value="P.E">PE</option>
          </select>
        </div>
        <br />
        <div>
          <label htmlFor="grade">Grade</label>
          <input
            type="text"
            id="grade"
            name="grade"
            onChange={(e) => setGrade(e.target.value)}
          />
        </div>
        <button id="add-student-btn" type='submit' disabled={disable}>
          Add student
        </button>
      </div>
    </form>
  );
}

export default AddStudent;
