import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginas from "./loginas/Loginas";
import Loginform from "./logIn form/Loginform";
import Studentsform from "./Students data form/Studentsform";
import Teachers from "./Teachers/Teachers";
import AdminRegister from "./Teachers/AdminRegister";
import Mentor from "./Mentor/Mentor";
import Personalinfo from "./personalinfo/Personalinfo";
import Academicsinfo from "./academicsinfo/Academicsinfo";
import TeacherSeePersonalInfo from "./Teachers/TeachersDataPersonalInfo";
import TeachersSeeAcademicsInfo from "./Teachers/TeachersDataAcademicsInfo";
import MentorSeePersonalInfo from "./Mentor/MentorDataPersonalInfo";
import MentorSeeAcademicsInfo from "./Mentor/MentorDataAcademicsInfo";
import Register from "./Registeration/Register";
import Email from "./EmailComponent/Email";

function Routess() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginas />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/mentor" element={<Mentor />} />
        <Route path="/student" element={<Studentsform />} />
        <Route path="/admin" element={<Teachers />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/personalinfo" element={<Personalinfo />} />{" "}
        {/* Add the route for Personalinfo */}
        <Route path="/academicsinfo" element={<Academicsinfo />} />{" "}
        {/* Add the route for Academicsinfo */}
        <Route
          path="/teacher_personal_info_check"
          element={<TeacherSeePersonalInfo />}
        />
        <Route
          path="/teacher_academics_info_check"
          element={<TeachersSeeAcademicsInfo />}
        />
        <Route
          path="/mentor_personal_info_check"
          element={<MentorSeePersonalInfo />}
        />
        <Route
          path="/mentor_academics_info_check"
          element={<MentorSeeAcademicsInfo />}
        />
        <Route path="/email" element={<Email/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default Routess;
