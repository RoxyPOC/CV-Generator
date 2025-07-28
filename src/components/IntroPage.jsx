import { useNavigate } from "react-router-dom";
import "../styles/IntroPage.css";
import "animate.css/animate.min.css";

export default function IntroPage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="animate__animated animate__fadeInUp">
        <h1>Build your CV today with CV GEN!</h1>
      </div>
      <div className="animate__animated animate__fadeInUp intro">
        <p>
          Easily create your professional resume. You can start building your
          resume in less than 5 seconds, using predefined sections. <br />
          You can tailor it to your own needs and and DOWNLOAD it!
        </p>
      </div>
      <div className="animate__animated animate__fadeInUp animate__delay-1s">
        <button onClick={() => navigate("/personal-info")}>
          Create it now!
        </button>
      </div>
    </>
  );
}
