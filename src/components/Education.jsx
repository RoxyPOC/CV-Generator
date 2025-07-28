import { ChevronRight, ChevronLeft } from "lucide-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Education.css";

export default function Education({ formData, setFormData }) {
  // const [formData, setformData] = useState({});
  // const [textarea, setTextarea] = useState("");

  const navigate = useNavigate();

  // const handleChangeTextArea = (event) => {
  //   setTextarea(event.target.value);
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/technicalskills");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header-row">
          <h2>Education</h2>

          <div className="buttons">
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate("/personal-info")}
            >
              <span className="arrow-next">
                <ChevronLeft size={19} strokeWidth={2.25} />
              </span>
              Back
            </button>
            <button className="next-btn" type="submit">
              Next
              <span className="arrow-next">
                <ChevronRight size={19} strokeWidth={2.25} />
              </span>
            </button>
          </div>
        </div>

        <div className="education">
          <div className="education-fields">
            <label htmlFor="university">
              University
              <input
                type="text"
                placeholder="Harvard Institute of Technology"
                name="university"
                value={formData.university || ""}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="location">
              Location
              <input
                type="text"
                placeholder="Location"
                name="location"
                value={formData.location || ""}
                onChange={handleChange}
              />
            </label>

            <label htmlFor="date">
              Graduation Date
              <input
                type="text"
                placeholder="2025"
                name="date"
                value={formData.date || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="description">
            <label htmlFor="description">
              Description
              <input
                type="text"
                placeholder="Provide bullet points about your education, such as your degree, relevant coursework, and your activities or achievements there."
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
      </form>
    </>
  );
}
