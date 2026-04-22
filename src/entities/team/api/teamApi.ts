import { http } from "@/shared/api/http";
import type { TeamsResponse, Team, TeamMatchesResponse } from "../model/types";

export const getTeams = (competitionId: number) => {
  return http.get<TeamsResponse>(`/api/competitions/${competitionId}/teams`);
};

export const getTeam = (id: number) => {
  return http.get<Team>(`/api/teams/${id}`);
};

export const getTeamMatches = (
  id: number,
  params?: { dateFrom?: string; dateTo?: string },
) => {
  return http.get<TeamMatchesResponse>(`/api/teams/${id}/matches`, params);
};
