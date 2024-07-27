import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
//import Navbar from '../navbar/Navbar';
import "./Loginas.modules.css";
import Name from "../navbar/cllg-title.png";
import main from "../navbar/main.svg";
import Logo from "../navbar/Logo";

const Loginas = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };


  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.className = theme;
  }, [theme]);

  const navigate = useNavigate();

  const handleButtonClick = (selection) => {
    navigate("/login", { state: { selection } });
  };

  return (
    <>
      <nav>
        <Logo />
        <div className="name">
          <img src={Name} alt="name" />
        </div>
      </nav>
      <div className={`App ${theme}`}>
      <button className="togglebutton" onClick={toggleTheme}>Dark Mode</button>
    </div>
      <div className="home-container login" style={{ overflow: "hidden" }}>
        <div>
          <h1>Sakec Action Tracker</h1>
          <p>
            Introducing the SAKEC Student Event Tracker App your ultimate
            companion for staying updated on all the exciting happenings at our
            campus! With the SAKEC Event Tracker App, you'll never miss out on
            any event that piques your interest.
          </p>

          <div>
            <button
              onClick={() => {
                navigate("/register");
              }}
            >
              Register
            </button>
          </div>

          <div
            className="button-container"
            style={{
              marginLeft: "40px",
              display: "flex",
              justifyContent: "space-between",
              width: "30%",
            }}
          >
            <button onClick={() => handleButtonClick("admin")}>
              Login/ADMIN
            </button>
            <button onClick={() => handleButtonClick("mentor")}>
              Login/Mentor
            </button>
            <button onClick={() => handleButtonClick("student")}>
              Login/Student
            </button>
          </div>
        </div>
        <img
          src={main}
          alt="job hunt"
          width="450px"
          height="500px"
          style={{ display: "inline", position: "absolute", right: "0" }}
        />
      </div>
    </>
  );
};

export default Loginas;
