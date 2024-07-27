import React, { useState } from "react";
import axios from "axios";
import "./Academicsinfo.modules.css";

function Academicsinfo() {
  const [formData, setFormData] = useState({
    name: "",
    class: "",
    rollNo: "",
    mentorName: "",
    competitionsImage: null,
    projectpresentationsImage: null,
    paperPresentationsImage: null,
    onlineCourseImage: null,
    copyrightImage: null,
    internshipImage: null,
    certificationImage: null,
  });

  const handleChange = (event) => {
    const { name, value, type, files } = event.target;
    const newValue = type === "file" ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    try {
      if (
        !formData.name ||
        !formData.studentClass ||
        !formData.rollNo ||
        !formData.mentorName
      ) {
        alert("Please fill in all required fields.");
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("studentClass", formData.studentClass);
      formDataToSend.append("rollNo", formData.rollNo);
      formDataToSend.append("mentorName", formData.mentorName);
      formDataToSend.append("competitionsImage", formData.competitionsImage);
      formDataToSend.append(
        "projectpresentationsImage",
        formData.projectpresentationsImage
      );
      formDataToSend.append(
        "paperPresentationsImage",
        formData.paperPresentationsImage
      );
      formDataToSend.append("onlineCourseImage", formData.onlineCourseImage);
      formDataToSend.append("copyrightImage", formData.copyrightImage);
      formDataToSend.append("internshipImage", formData.internshipImage);
      formDataToSend.append("certificationImage", formData.certificationImage);

      await axios.post(
        "http://localhost:5000/api/addStudentData",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Student data added successfully!");
      setFormData({
        name: "",
        studentClass: "",
        rollNo: "",
        mentorName: "",
        competitionsImage: null,
        projectpresentationsImage: null,
        paperPresentationsImage: null,
        onlineCourseImage: null,
        copyrightImage: null,
        internshipImage: null,
        certificationImage: null,
      });
      event.target.reset();
      // form.reset();
    } catch (error) {
      if (error.response) {
        // Server responded with an error status code
        console.error("Server error:", error.response.data);
        alert("An error occurred on the server.");
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received from the server.");
        alert("No response received from the server.");
      } else {
        // Something else went wrong
        console.error("Error:", error.message);
        alert("An error occurred.");
      }
    }
    
  };

  return (
    <div className="body">
      <div class="container">
        <div class="title">Add Student</div>
        <form onSubmit={handleSubmit}>
          <div class="user__details">
            <div class="input__box">
              <span class="details">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Class</span>
              <input
                type="text"
                name="studentClass"
                value={formData.studentClass}
                onChange={handleChange}
                required
              />
            </div>
            <div class="input__box">
              <span class="details">Roll No.</span>
              <input
                type="Number"
                name="rollNo"
                value={formData.rollNo}
                onChange={handleChange}
                required
              />
            </div>
            {/* mentors name */}
            <div class="input__box">
              <label class="details" for="mentorName">
                Mentor Name:
              </label>
              <select
                id="mentorName"
                name="mentorName"
                required
                value={formData.mentorName}
                onChange={handleChange} // Make sure you have an handleChange function to update formData
              >
                <option value="">Select Mentor Name</option>
                <option value="name1">name 1</option>
                <option value="name2">name 2</option>
              </select>
            </div>

            {/* Image upload fields */}
            <div class="input__box">
              <span class="details">
                Participate/Organize competitions (Technical/Non-technical)
              </span>
              <input
                type="file"
                name="competitionsImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Project Presentations Image</span>
              <input
                type="file"
                name="projectpresentationsImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Paper Presentations Image</span>
              <input
                type="file"
                name="paperPresentationsImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Online Course Image</span>
              <input
                type="file"
                name="onlineCourseImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Copyright Image</span>
              <input
                type="file"
                name="copyrightImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Internship Image</span>
              <input
                type="file"
                name="internshipImage"
                onChange={handleChange}
              />
            </div>

            <div class="input__box">
              <span class="details">Certification Image</span>
              <input
                type="file"
                name="certificationImage"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Add similar input elements for other image uploads */}

          <button type="submit" class="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Academicsinfo;
