import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

function TeachersDataAcademicsInfo()  {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from the Express.js server
    axios.get("http://localhost:5000/api/display-student-data")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <StyledWrapper>
    <div>
      <h2>Display Student Data</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Class</th>
            <th>Roll No.</th>
            <th>Mentor Name</th>
            <th>Participate/Organize competitions </th>
            <th>Project Presentation </th>
            <th>Paper Presentations </th>
            <th>Online Course </th>
            <th>Copyright </th>
            <th>Internship </th>
            <th>Certification </th>
            {/* Add headers for other fields as needed */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.studentClass}</td>
              <td>{student.rollNo}</td>
              <td>{student.mentorName}</td>
              <td><a href={student.competitionsImage} target="_blank" rel="noopener noreferrer">Competitions</a></td>
              <td><a href={student.projectpresentationsImage} target="_blank" rel="noopener noreferrer"> Project Presentations</a></td>
              <td><a href={student.paperPresentationsImage} target="_blank" rel="noopener noreferrer">Paper Presentations </a></td>
              <td><a href={student.onlineCourseImage} target="_blank" rel="noopener noreferrer">Online Course </a></td>
              <td><a href={student.copyrightImage} target="_blank" rel="noopener noreferrer">Copyright </a></td>
              <td><a href={student.internshipImage} target="_blank" rel="noopener noreferrer">Internship </a></td>
              <td><a href={student.certificationImage} target="_blank" rel="noopener noreferrer">Certification </a></td>
              {/* Add cells for other fields as needed */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.section`
/* Style for the entire container */
div {
  text-align: center;
  margin: 20px;
}

/* Style for the table */
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
}

/* Style for table headers */
th {
  background-color: #333;
  color: #fff;
  padding: 10px;
  text-align: left;
}

/* Style for table cells */
td {
  border: 1px solid #ddd;
  padding: 10px;
}

/* Style for table rows */
tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* Style for links in table cells */
td a {
  text-decoration: none;
  color: #007BFF;
  font-weight: bold;
}

/* Hover effect for links */
td a:hover {
  text-decoration: underline;
}

/* Responsive styles for smaller screens */
@media (max-width: 768px) {
  table {
    border: 0;
  }
  
  th, td {
    border: 0;
    padding: 8px;
    display: block;
  }

  th {
    background-color: #333;
    color: #fff;
    font-weight: bold;
  }

  tr {
    margin-bottom: 10px;
  }

  td {
    text-align: left;
  }
}
`;

export default TeachersDataAcademicsInfo
