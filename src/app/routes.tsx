// src/routes/routes.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home/pages/Home";
import { LandingPage } from "../features/landing-page/pages/LandingPage";
// import other pages as needed

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
