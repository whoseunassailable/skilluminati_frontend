// src/routes/routes.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "../features/home/pages/Home";
// import other pages as needed

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
