import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Import Axios library
import styled from "styled-components";
import * as XLSX from "xlsx";
import "./PersonalInfo.modules.css";

const MentorDataPersonalInfo = () => {
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCookie = Cookies.get("loginName");

  console.log(getCookie);

  useEffect(() => {
    // Use Axios to make the GET request
    axios
      .get("http://localhost:5000/api/display-form")
      .then((response) => {
        console.log(response.data);
        const filteredData = response.data.filter(
          (data) => data.mentorName === getCookie
        );
        setMentorData(filteredData);
        setLoading(false);
        console.log(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // Empty dependency array to run this effect only once
  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(mentorData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "StudentData");
    XLSX.writeFile(wb, "student_data.xlsx");
  };

  // console.log(mentorData);
  return (
    <StyledWrapper>
      <div>
        <h1>Mentors will see students form data</h1>
        <button onClick={exportToExcel}>Export to Excel</button>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="container">
            <table border="1">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Roll No</th>
                  <th>Full Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Mobile Number</th>
                  <th>Father Name</th>
                  <th>Father Email</th>
                  <th>Father Mobile Number</th>
                  <th>Father Qualification</th>
                  <th>Father Designation</th>
                  <th>Father Working Place</th>
                  <th>Mother Name</th>
                  <th>Mother Email</th>
                  <th>Mother Mobile Number</th>
                  <th>Mother Qualification</th>
                  <th>Mother Designation</th>
                  <th>Mother Working Place</th>
                  <th>Mentor Name</th>
                  {/* Add more table headers for other fields as needed */}
                </tr>
              </thead>
              <tbody>
                {mentorData.map((data, index) => (
                  <tr key={index}>
                    <td>{data.class}</td>
                    <td>{data.rollNo}</td>
                    <td>{data.fullName}</td>
                    <td>{data.address}</td>
                    <td>{data.email}</td>
                    <td>{data.mobileNumber}</td>
                    <td>{data.fatherName}</td>
                    <td>{data.fatherEmail}</td>
                    <td>{data.fatherMobileNumber}</td>
                    <td>{data.fatherQualification}</td>
                    <td>{data.fatherDesignation}</td>
                    <td>{data.fatherWorkingPlace}</td>
                    <td>{data.motherName}</td>
                    <td>{data.motherEmail}</td>
                    <td>{data.motherMobileNumber}</td>
                    <td>{data.motherQualification}</td>
                    <td>{data.motherDesignation}</td>
                    <td>{data.motherWorkingPlace}</td>
                    <td>{data.mentorName}</td>
                    {/* Add more table cells for other fields as needed */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  /* Style for the entire table container */
  div {
    text-align: center;
    margin: 20px;
  }

  .container {
    overflow-y: scroll;
    overflow-x: scroll;
    max-height: 10000px;
    max-width: 10000px;
    text-align: center;
    background-color: azure;
  }

  /* Style for the table header */
  table {
    border-collapse: collapse;
    width: 100%;
    border-spacing: 0;
  }

  th,
  td {
    border: 1px solid #ddd;
    color: #fff;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: left;
  }

  /* Style for the loading message */
  p {
    font-weight: bold;
    color: #333;
  }

  /* Style for the table rows */
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  /* Style for table cells */
  td {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
  }

  /* Responsive style for the table */
  @media (max-width: 768px) {
    table {
      border: 0;
    }
    th,
    td {
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
      display: block;
    }
  }
`;

export default MentorDataPersonalInfo;
