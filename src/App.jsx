import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import { useState } from "react";
import { Download } from "lucide-react";

import "./App.css";
// import DarkMode from "./components/DarkMode";
import IntroPage from "./components/IntroPage";
import PersonalInformation from "./components/PersonalInformation"; // Create this component
import Education from "./components/Education";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import NavBarIcons from "./components/NavBarIcons";
import MyDocument from "./components/PDFviewer";

export default function App() {
  const [formData, setFormData] = useState({
    fullname: "",
    city: "",
    phone: "",
    email: "",
    summary: "",
    university: "",
    location: "",
    date: "",
    skills: [{ id: crypto.randomUUID(), type: "", skill: "" }],
    projects: [{ id: crypto.randomUUID(), project: "", description: "" }],
    experience: [
      {
        id: crypto.randomUUID(),
        company: "",
        position: "",
        location: "",
        date: "",
        description: "",
      },
    ],
  });

  return (
    <BrowserRouter basename="/CV-Generator/">
      <div className="app-container">
        <div className="form-side">
          <NavBarIcons />
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route
              path="/personal-info"
              element={
                <PersonalInformation
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            />
            <Route
              path="/education"
              element={
                <Education formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path="/technicalskills"
              element={
                <TechnicalSkills
                  formData={formData}
                  setFormData={setFormData}
                />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects formData={formData} setFormData={setFormData} />
              }
            />
            <Route
              path="/experience"
              element={
                <Experience formData={formData} setFormData={setFormData} />
              }
            />
          </Routes>
        </div>

        <div className="pdf-preview">
          <PDFViewer width="100%" height="100%">
            <MyDocument formData={formData} />
          </PDFViewer>

          <div className="download-button">
            <PDFDownloadLink
              document={<MyDocument formData={formData} />}
              fileName="resume.pdf"
            >
              {({ loading }) => (
                <button disabled={loading}>
                  {loading ? "Preparing document..." : <Download />}
                </button>
              )}
            </PDFDownloadLink>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
