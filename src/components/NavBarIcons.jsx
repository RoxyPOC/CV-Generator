import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  UserRoundPen,
  GraduationCap,
  Brain,
  FolderOpenDot,
  BriefcaseBusiness,
  Menu,
  X,
} from "lucide-react";
import "../styles/NavBarIcons.css";

export default function NavBarIcons() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <button
        className="menu-toggle"
        onClick={() => setShowMenu((prev) => !prev)}
      >
        {showMenu ? <X size={20} /> : <Menu size={20} strokeWidth={1.5} />}
      </button>

      {(isMobile ? showMenu : true) && (
        <div className="icon-container">
          <div className="icons">
            <button
              type="button"
              onClick={() => navigate("/personal-info")}
              className="btn-icons per-info"
            >
              <UserRoundPen size={40} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/education")}
              className="btn-icons graduation"
            >
              <GraduationCap size={40} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/technicalskills")}
              className="btn-icons tech-skills"
            >
              <Brain size={40} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/projects")}
              className="btn-icons projects"
            >
              <FolderOpenDot size={40} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={() => navigate("/experience")}
              className="btn-icons experience"
            >
              <BriefcaseBusiness size={40} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
