import styles from "./MatchesTable.module.css";
import {
  STATUS_LABELS,
  type MatchesTableProps,
  type MatchStatus,
} from "../model/types";
import { formatDate } from "@/shared/lib/formatDate";
import { formatTime } from "@/shared/lib/formatTime";
import { formatScore } from "@/shared/lib/formatScore";

const STATUS_COLORS: Record<MatchStatus, string> = {
  SCHEDULED: styles.statusScheduled,
  LIVE: styles.statusLive,
  IN_PLAY: styles.statusLive,
  PAUSED: styles.statusPaused,
  FINISHED: styles.statusFinished,
  POSTPONED: styles.statusPostponed,
  SUSPENDED: styles.statusPostponed,
  CANCELLED: styles.statusCancelled,
};

const SkeletonRow = () => (
  <tr className={styles.skeletonRow}>
    {Array.from({ length: 5 }).map((_, i) => (
      <td key={i}>
        <div className={styles.skeletonCell} />
      </td>
    ))}
  </tr>
);

const MatchesTable = ({ matches, isLoading, error }: MatchesTableProps) => {
  if (error) {
    return (
      <div className={styles.errorState}>
        <span className={styles.errorIcon}>!</span>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.thDate}>Дата</th>
            <th className={styles.thTime}>Время</th>
            <th className={styles.thStatus}>Статус</th>
            <th className={styles.thTeams}>Матч</th>
            <th className={styles.thScore}>Счёт</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, i) => <SkeletonRow key={i} />)
          ) : matches.length === 0 ? (
            <tr>
              <td colSpan={5} className={styles.emptyState}>
                Матчи не найдены
              </td>
            </tr>
          ) : (
            matches.map((match) => (
              <tr key={match.id} className={styles.row}>
                <td className={styles.tdDate}>{formatDate(match.utcDate)}</td>
                <td className={styles.tdTime}>{formatTime(match.utcDate)}</td>
                <td className={styles.tdStatus}>
                  <span
                    className={`${styles.statusBadge} ${STATUS_COLORS[match.status] || ""}`}
                  >
                    {STATUS_LABELS[match.status] || match.status}
                  </span>
                </td>
                <td className={styles.tdTeams}>
                  <span className={styles.homeTeam}>{match.homeTeam.name}</span>
                  <span className={styles.vs}>—</span>
                  <span className={styles.awayTeam}>{match.awayTeam.name}</span>
                </td>
                <td className={styles.tdScore}>
                  <span className={styles.score}>
                    {formatScore(match.score)}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MatchesTable;
