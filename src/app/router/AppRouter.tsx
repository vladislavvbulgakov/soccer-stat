import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LeaguesPage from "@/pages/leagues/ui/LeaguesPage";
import Layout from "./Layout/Layout";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/leagues" element={<LeaguesPage />} />
          <Route path="/" element={<Navigate to="/ads" />} />

          <Route path="*" element={<Navigate to="/leagues" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
