export type MatchStatus =
  | "SCHEDULED"
  | "LIVE"
  | "IN_PLAY"
  | "PAUSED"
  | "FINISHED"
  | "POSTPONED"
  | "SUSPENDED"
  | "CANCELLED";

export const STATUS_LABELS: Record<MatchStatus, string> = {
  SCHEDULED: "Запланирован",
  LIVE: "В прямом эфире",
  IN_PLAY: "В игре",
  PAUSED: "Пауза",
  FINISHED: "Завершён",
  POSTPONED: "Отложен",
  SUSPENDED: "Приостановлен",
  CANCELLED: "Отменён",
};
export interface MatchScore {
  fullTime: { homeTeam: number | null; awayTeam: number | null };
  extraTime?: { homeTeam: number | null; awayTeam: number | null };
  penalties?: { homeTeam: number | null; awayTeam: number | null };
}

export interface MatchItem {
  id: number;
  utcDate: string;
  status: MatchStatus;
  homeTeam: { name: string };
  awayTeam: { name: string };
  score: MatchScore;
}

export interface MatchesTableProps {
  matches: MatchItem[];
  isLoading?: boolean;
  error?: string | null;
}
