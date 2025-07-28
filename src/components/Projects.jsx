import { ChevronRight, ChevronLeft, Trash, SquarePlus } from "lucide-react";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Projects.css";
import { v4 as UUID } from "uuid";

export default function Projects({ formData, setFormData }) {
  // const [inputs, setInputs] = useState([
  //   { id: crypto.randomUUID(), project: "", description: "" },
  // ]);

  const navigate = useNavigate();

  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/experience");
  };

  const handleProjectChange = (event, id) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      projects: prev.projects.map((project) =>
        project.id === id ? { ...project, [name]: value } : project
      ),
    }));
  };

  const addProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        { id: crypto.randomUUID(), project: "", description: "" },
      ],
    }));
  };

  const deleteProject = (id) => {
    setFormData((prev) => {
      const updatedProjects = prev.projects
        .filter((project) => project.id !== id)
        .filter((project) => project.project || project.description);

      return {
        ...prev,
        projects:
          updatedProjects.length > 0
            ? updatedProjects
            : [{ id: crypto.randomUUID(), project: "", description: "" }],
      };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="header-row">
          <h2>Projects</h2>

          <div className="buttons">
            <button
              className="back-btn"
              type="button"
              onClick={() => navigate("/technicalskills")}
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
          {formData.projects.map((project) => (
            <div className="skills-fields" key={project.id}>
              <label htmlFor="type">
                Project Name
                <input
                  type="text"
                  placeholder="Name your project"
                  name="project"
                  value={project.type}
                  onChange={(e) => handleProjectChange(e, project.id)}
                />
              </label>

              <label htmlFor="description">
                Description
                <input
                  type="text"
                  placeholder="Describe your project"
                  name="description"
                  value={project.description}
                  onChange={(e) => handleProjectChange(e, project.id)}
                />
              </label>

              <button
                className="delete-btn"
                type="button"
                onClick={() => deleteProject(project.id)}
              >
                <span className="delete">
                  <Trash size={19} />
                </span>
              </button>
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addProject}>
            <span className="delete">
              <SquarePlus size={19} />
            </span>
          </button>
        </div>
      </form>
    </>
  );
}
