import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome-page/Welcome";
import PersonalInfoPage from "./pages/personal-page/PersonalInfoPage";
import Experience from "./pages/experience-page/Experience";
import Education from "./pages/education-page/Education";

import FinishPage from "./pages/finish-page/FinishPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/personal-info" element={<PersonalInfoPage />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/education" element={<Education />} />
      <Route path="/resume" element={<FinishPage />} />
    </Routes>
  );
}

export default App;
