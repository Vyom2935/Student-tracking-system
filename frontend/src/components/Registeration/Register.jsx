import React, { useState } from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    userType: "student",
  });

  const [errors, setErrors] = useState({});
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear the error message when the user starts typing again
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform form validation
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length === 0) {
      // Validation passed; send the data to the server for registration
      try {
        const response = await fetch("http://localhost:5000/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({
            username: "",
            email: "",
            password: "",
            userType: "student",
          });
          console.log("Registration successful");
          alert("User created! Go back to home page.")
          
          // Optionally, you can redirect the user or perform other actions upon successful registration.
        } else {
          console.error("Registration failed");
          // Handle the error, such as displaying an error message to the user.
        }
      } catch (error) {
        console.error("Registration error:", error);
      }
    } else {
      // Validation failed; set the errors state to display error messages
      setErrors(validationErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    // Basic validation examples (customize as needed)
    if (!data.username.trim()) {
      errors.username = "Username is required";
    }

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(data.email)) {
      errors.email = "Invalid email format";
    }

    if (!data.password.trim()) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // You can use a regular expression or a library like validator.js for more robust email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <StyledWrapper>
    <div>
      
      <form className="container" onSubmit={handleSubmit}>
        <div>
        <h2>Register</h2>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <label htmlFor="userType">User Type:</label>
          <select
            id="userType"
            name="userType"
            value={formData.userType}
            onChange={handleInputChange}
          >
            <option value="student">Student</option>
            <option value="mentor">Mentor</option>
            <option value="admin">Admin</option> 
          </select>
        </div>
        <div>
          <button type="submit">Register</button>
          <p>Return to Home page</p>
          <Link to='/' className='member_btn'>Home</Link>
        </div>
      </form>
    </div>
    </StyledWrapper>
  );
};


const StyledWrapper = styled.section`
.container {
  position: relative;
  top: 100px;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.container div {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

select {
  height: 40px; /* Adjust the height as needed */
}

.error {
  color: #ff0000;
  font-size: 14px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}
`

export default Register;
