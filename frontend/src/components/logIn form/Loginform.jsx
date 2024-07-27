import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./loginform.modules.css";
import Logo from "../navbar/Logo";
import Name from "../navbar/cllg-title.png";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import Wrapper from "./RegisterAndLoginPage";
import Cookies from "js-cookie";

function Loginform() {
  const [userType, setUserType] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log(location.state?.selection);
    if (location.state?.selection === "admin") {
      setUserType("admin");
    } else if (location.state?.selection === "mentor") {
      setUserType("mentor");
    } else if (location.state?.selection === "student") {
      setUserType("student");
    }
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginName = username;
  // Save the login name in a cookie with a specific name (e.g., 'loginName')
  Cookies.set("loginName", loginName, { expires: 7 }); // 'expires' is the cookie expiration in days

  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("Sending request with payload:", {
      username,
      password,
      userType,
    });

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password, userType }),
      });

      console.log("Response status:", response.status);

      if (response.ok) {
        const data = await response.json();

        if (data.message === "Login successful") {
          if (userType) {
            navigate(`/${userType}`);
          }
        } else {
          // Handle login failure here, e.g., show an error message to the user
          console.log("Login failed");
        }
      } else {
        // Handle other response statuses here, e.g., unauthorized
        console.log("Error:", response);
      }
    } catch (error) {
      console.error("wrong password");
      console.error("Error:", error);
    }
  };
  return (
    <>
      <nav>
        <Logo />
        <div className="name">
          <img src={Name} alt="name" />
        </div>
      </nav>

      <div className="login">
        <Wrapper>
          <form className="form" onSubmit={handleSubmit}>
            <Logo />
            <div>
              <label className="form" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div>
              <label className="form" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <GoogleOAuthProvider clientId="679749642395-30mmhi9f6ledqhg7mql8q8soe5d25paf.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  var decoded = jwt_decode(credentialResponse.credential);

                  console.log(decoded);
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </GoogleOAuthProvider>
            <button type="submit">Submit</button>
          </form>
        </Wrapper>
      </div>
    </>
  );
}

export default Loginform;
