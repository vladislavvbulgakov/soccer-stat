import LeaguesPage from "@/pages/leagues/ui/LeaguesPage/LeaguesPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leagues" element={<LeaguesPage />} />
        <Route path="/" element={<Navigate to="/ads" />} />

        <Route path="*" element={<Navigate to="/leagues" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
