import type { MatchScore } from "@/widgets/matches-table/model/types";

export const formatScore = (score: MatchScore): string => {
  const ft = score.fullTime;
  if (ft.homeTeam === null || ft.awayTeam === null) return "—";

  let result = `${ft.homeTeam}:${ft.awayTeam}`;

  const et = score.extraTime;
  if (et && et.homeTeam !== null && et.awayTeam !== null) {
    result += ` (${et.homeTeam}:${et.awayTeam})`;
  }

  const pen = score.penalties;
  if (pen && pen.homeTeam !== null && pen.awayTeam !== null) {
    result += ` [${pen.homeTeam}:${pen.awayTeam}]`;
  }

  return result;
};
