import { Sunrise, MoonStar } from "lucide-react";
import { useEffect, useState } from "react";
import "../styles/DarkMode.css";

export default function DarkMode() {
  const [dark, setDark] = useState(() => {
    // Check localStorage for saved preference
    return localStorage.getItem("dark-mode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", dark);
    localStorage.setItem("dark-mode", dark);
  }, [dark]);

  return (
    <>
      <div id="theme-toggle">
        <input
          type="checkbox"
          id="dark-mode-toggle"
          checked={dark}
          onChange={() => setDark((prev) => !prev)}
        />
        <label htmlFor="dark-mode-toggle" className="toggle-label">
          <span className="sun-icon">
            <Sunrise />
          </span>
          <span className="moon-icon">
            <MoonStar />
          </span>

          <div className="toggle-ball"></div>
        </label>
      </div>
    </>
  );
}
