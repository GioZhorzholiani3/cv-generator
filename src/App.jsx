import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/welcome-page/Welcome";
import PersonalInfoPage from "./pages/personal-page/PersonalInfoPage";

import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/personal-info" element={<PersonalInfoPage />} />
    </Routes>
  );
}

export default App;
