import { http } from "@/shared/api/http";
import type { TeamsResponse, Team, TeamMatchesResponse } from "../model/types";

export const getTeams = (competitionId: number) => {
  return http.get<TeamsResponse>(`/competitions/${competitionId}/teams`);
};

export const getTeam = (id: number) => {
  return http.get<Team>(`/teams/${id}`);
};

export const getTeamMatches = (
  id: number,
  params?: { dateFrom?: string; dateTo?: string },
) => {
  return http.get<TeamMatchesResponse>(`/teams/${id}/matches`, params);
};
