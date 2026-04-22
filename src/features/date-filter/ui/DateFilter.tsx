import styles from "./DateFilter.module.css";
import type { DateFilterProps } from "../model/types";

const DateFilter = ({
  dateFrom,
  dateTo,
  onDateFromChange,
  onDateToChange,
}: DateFilterProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Матчи с</span>
      <div className={styles.inputWrapper}>
        <input
          type="date"
          className={styles.input}
          value={dateFrom}
          onChange={(e) => onDateFromChange(e.target.value)}
          max={dateTo || undefined}
        />
      </div>
      <span className={styles.separator}>по</span>
      <div className={styles.inputWrapper}>
        <input
          type="date"
          className={styles.input}
          value={dateTo}
          onChange={(e) => onDateToChange(e.target.value)}
          min={dateFrom || undefined}
        />
      </div>
    </div>
  );
};

export default DateFilter;
