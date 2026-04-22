import { http } from "@/shared/api/http";
import type { CompetitionsResponse } from "../model/types";
import type { CompetitionMatchesResponse } from "@/entities/match/model/types";

export const getCompetitions = () => {
  return http.get<CompetitionsResponse>("/api/competitions");
};

export const getCompetitionMatches = (
  id: number,
  params?: { dateFrom?: string; dateTo?: string },
) => {
  return http.get<CompetitionMatchesResponse>(
    `/api/competitions/${id}/matches`,
    params,
  );
};
