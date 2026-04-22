import type { MatchStatus } from "@/widgets/matches-table/model/types";

export interface ApiMatch {
  id: number;
  utcDate: string;
  status: MatchStatus;
  homeTeam: { name: string };
  awayTeam: { name: string };
  score: {
    fullTime: { homeTeam: number | null; awayTeam: number | null };
    extraTime?: { homeTeam: number | null; awayTeam: number | null };
    penalties?: { homeTeam: number | null; awayTeam: number | null };
  };
}
export interface TeamMatchesResponse {
  matches: ApiMatch[];
}
export interface Team {
  id: number;
  name: string;
  shortName: string;
  tla: string;
  crest: string;

  area: {
    id: number;
    name: string;
    code: string;
    flag: string | null;
  };

  address: string;
  website: string;
  founded: number;
  clubColors: string;
  venue: string;
}
export interface TeamsResponse {
  count: number;
  teams: Team[];
}
