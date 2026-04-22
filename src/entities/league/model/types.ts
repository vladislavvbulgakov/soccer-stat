export interface Area {
  id: number;
  name: string;
  code: string;
  flag: string | null;
}

export interface Season {
  id: number;
  startDate: string;
  endDate: string;
  currentMatchday: number | null;
  winner: null;
}

export interface Competition {
  id: number;
  name: string;
  code: string;
  type: "LEAGUE" | "CUP";
  emblem: string | null;

  area: Area;

  plan: string;

  currentSeason: Season;

  numberOfAvailableSeasons: number;
  lastUpdated: string;
}
export interface CompetitionsResponse {
  count: number;
  filters: Record<string, unknown>;
  competitions: Competition[];
}
