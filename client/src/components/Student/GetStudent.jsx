import React, { useEffect, useState } from "react";
import axios from "axios";
import "./GetStudent.css";

function GetStudent(props) {
  const [student_list, setStudentList] = useState([{}]);
  useEffect(async () => {
      setStudentList(props.students)
  }, [student_list, props.students]);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {student_list.map((student) => {
            return (
              <tr>
                <td>{student.name}</td>
                <td>{student.subject}</td>
                <td>{student.grade}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default GetStudent;
