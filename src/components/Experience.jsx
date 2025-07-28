import { ChevronLeft, Trash, SquarePlus } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "../styles/Experience.css";
import { v4 as UUID } from "uuid";

export default function Experience({ formData, setFormData }) {
  // const [inputs, setInputs] = useState([
  //   {
  //     id: crypto.randomUUID(),
  //     company: "",
  //     position: "",
  //     location: "",
  //     date: "",
  //     description: "",
  //   },
  // ]);

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 60,
      origin: { y: 0.6 },
    });

    setIsLoading(false);
  };

  const handleExperienceChange = (event, id) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      ),
    }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          id: crypto.randomUUID(),
          company: "",
          position: "",
          location: "",
          date: "",
          description: "",
        },
      ],
    }));
  };

  const deleteExperience = (id) => {
    setFormData((prev) => {
      const updatedExperience = prev.experience
        .filter((exp) => exp.id !== id)
        .filter((exp) => exp.company || exp.position || exp.description);

      return {
        ...prev,
        experience:
          updatedExperience.length > 0
            ? updatedExperience
            : [
                {
                  id: crypto.randomUUID(),
                  company: "",
                  position: "",
                  location: "",
                  date: "",
                  description: "",
                },
              ],
      };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header-row">
          <h2>Work Experience </h2>

          <div className="buttons">
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate("/projects")}
            >
              <span className="arrow-next">
                <ChevronLeft size={19} strokeWidth={2.25} />
              </span>
              Back
            </button>
            <button className="complete-btn" type="submit" disabled={isLoading}>
              {isLoading ? (
                "Generating..."
              ) : (
                <>
                  Complete Resume
                  {/* Hidden confetti trigger for visual feedback */}
                  <span className="confetti-trigger"></span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="skills">
          {formData.experience.map((exp) => (
            <div className="skills-fields" key={exp.id}>
              <label>
                Company
                <input
                  type="text"
                  name="company"
                  value={exp.company}
                  onChange={(e) => handleExperienceChange(e, exp.id)}
                />
              </label>

              <label>
                Position
                <input
                  type="text"
                  name="position"
                  value={exp.position}
                  onChange={(e) => handleExperienceChange(e, exp.id)}
                />
              </label>

              <label>
                Location
                <input
                  type="text"
                  name="location"
                  value={exp.location}
                  onChange={(e) => handleExperienceChange(e, exp.id)}
                />
              </label>

              <label>
                Date
                <input
                  type="text"
                  name="date"
                  value={exp.date}
                  onChange={(e) => handleExperienceChange(e, exp.id)}
                />
              </label>

              <label>
                Description
                <input
                  //   className="description"
                  type="text"
                  name="description"
                  value={exp.description}
                  onChange={(e) => handleExperienceChange(e, exp.id)}
                />
              </label>

              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteExperience(exp.id)}
              >
                <span className="delete">
                  <Trash size={19} />
                </span>
              </button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addExperience}>
            <span className="delete">
              <SquarePlus size={19} />
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
