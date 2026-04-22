import type { ApiMatch } from "@/entities/team/model/types";

export interface CompetitionMatchesResponse {
  competition: {
    id: number;
    name: string;
  };
  matches: ApiMatch[];
}
