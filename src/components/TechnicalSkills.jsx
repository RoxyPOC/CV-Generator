import { ChevronRight, ChevronLeft, Trash, SquarePlus } from "lucide-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TechnicalSkills.css";
import { v4 as UUID } from "uuid";

export default function TechnicalSkills({ formData, setFormData }) {
  // const [inputs, setInputs] = useState([
  //   { id: crypto.randomUUID(), type: "", skill: "" },
  // ]);

  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/projects");
  };

  const handleSkillChange = (event, id) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.map((skill) =>
        skill.id === id ? { ...skill, [name]: value } : skill
      ),
    }));
  };

  const addSkill = () => {
    setFormData((prev) => ({
      ...prev,
      skills: [
        ...prev.skills,
        { id: crypto.randomUUID(), type: "", skill: "" },
      ],
    }));
  };

  const deleteSkill = (id) => {
    setFormData((prev) => {
      const updatedSkills = prev.skills
        .filter((skill) => skill.id !== id)
        .filter((skill) => skill.type || skill.skill); // Remove completely empty skills

      return {
        ...prev,
        skills:
          updatedSkills.length > 0
            ? updatedSkills
            : [{ id: crypto.randomUUID(), type: "", skill: "" }],
      };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header-row">
          <h2>Technical Skills</h2>

          <div className="buttons">
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate("/education")}
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

        <div className="skills">
          {formData.skills.map((skill) => (
            <div className="skills-fields" key={skill.id}>
              <label htmlFor="type">
                Type
                <input
                  type="text"
                  placeholder="Languages,Tools or Technologies"
                  name="type"
                  value={skill.type}
                  onChange={(e) => handleSkillChange(e, skill.id)}
                />
              </label>

              <label htmlFor="skill">
                Actual skill
                <input
                  type="text"
                  placeholder="Skill"
                  name="skill"
                  value={skill.skill}
                  onChange={(e) => handleSkillChange(e, skill.id)}
                />
              </label>

              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteSkill(skill.id)}
              >
                <span className="delete">
                  <Trash size={19} />
                </span>
              </button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addSkill}>
            <span className="delete">
              <SquarePlus size={19} />
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
