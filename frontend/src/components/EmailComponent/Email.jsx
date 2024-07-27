import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Email = () => {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xygi3us', 'template_thr0ub8', form.current, 'MAFvPDyURri7UoPlc')
      .then((result) => {
          console.log(result.text);
          alert("Notification Sent Successfully!");
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    };
  return (
    <StyledWrapper>
    <form className="container" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <p>return to mentor page</p>
      <Link to='/mentor' className ='member_btn'>Mentor</Link>
    </form>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
body {
    font-family: Arial, sans-serif;
   }
   
   .container {
    position: relative;
    top: 100px;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    background: linear-gradient(135deg, #71b7e6, #9b59b6);
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
   }
   .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
   
   label {
    display: block;
    margin-top: 10px;
    font-weight: bold;
   }
   
   input[type="text"],
   input[type="email"],
   textarea {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 14px;
    resize: none;
   }
   
   input[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 15px;
    background: linear-gradient(-135deg, #71b7e6, #9b59b6);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
   }
   
   input[type="submit"]:hover {
    background-color: #45a049;
   }`

export default Email;