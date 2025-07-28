// import { useNavigate } from "react-router-dom";
import "../styles/PersonalInformation.css";
import { ChevronRight } from "lucide-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PersonalInformation({ formData, setFormData }) {
  // const [inputs, setInputs] = useState({});
  // const [textarea, setTextarea] = useState("");
  const navigate = useNavigate();

  // const handleChangeTextArea = (event) => {
  //   const value = event.target.value;
  //   setTextarea(event.target.value);
  //   setFormData((prev) => ({ ...prev, summary: value }));
  // };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/education");
  };

  return (
    <>
      {/*The form of The Personal Information */}

      <form onSubmit={handleSubmit}>
        {/*The header of The Personal Information */}
        <div className="header-row">
          <h2>Personal Information</h2>
          <button className="next-btn" type="submit">
            Next
            <span className="arrow-next">
              <ChevronRight size={19} strokeWidth={2.25} />
            </span>
          </button>
        </div>

        <div className="personal-info">
          <label htmlFor="fullName">
            Full Name
            <input
              type="text"
              placeholder="John Doe"
              name="fullname"
              value={formData.fullname || ""}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="address">
            Address
            <input
              type="text"
              placeholder="City, Country"
              name="city"
              value={formData.city || ""}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="phone">
            Phone
            <input
              type="text"
              placeholder="123 456 7890"
              name="phone"
              value={formData.phone || ""}
              onChange={handleChange}
            />
          </label>
          {/* <h3>{inputs.email}</h3> */}
          <label htmlFor="email">
            Email
            <input
              type="text"
              placeholder="johndoe@gmail.com"
              name="email"
              value={formData.email || ""}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="summary">
            Summary
            <input
              type="text"
              placeholder="Creative and detail-oriented Graphic Designer with a strong eye for aesthetics, layout, and visual storytelling."
              name="summary"
              value={formData.summary || ""}
              onChange={handleChange}
              rows={4}
            />
          </label>
        </div>
      </form>
    </>
  );
}
