import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LeaguesPage from "@/pages/leagues/ui/LeaguesPage";
import Layout from "./Layout/Layout";
import LeagueCalendarPage from "@/pages/league-calendar/ui/LeagueCalendarPage";
import TeamsPage from "@/pages/teams/ui/TeamsPage";
import TeamCalendarPage from "@/pages/teams-calendar/ui/TeamCalendarPage";
export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/leagues" element={<LeaguesPage />} />
          <Route path="/leagues/:id" element={<LeagueCalendarPage />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/teams/:id" element={<TeamCalendarPage />} />
          <Route path="*" element={<Navigate to="/leagues" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
