import styles from "./EntityGrid.module.css";
import type { EntityGridProps } from "../model/types";

const SkeletonCard = () => (
  <div className={styles.skeletonCard}>
    <div className={styles.skeletonLogo} />
    <div className={styles.skeletonText} />
    <div className={styles.skeletonSubtext} />
  </div>
);

const EntityGrid = ({ items, onItemClick, isLoading }: EntityGridProps) => {
  if (isLoading) {
    return (
      <div className={styles.grid}>
        {Array.from({ length: 8 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <button
          key={item.id}
          className={styles.card}
          onClick={() => onItemClick(item.id)}
        >
          <div className={styles.logoWrapper}>
            {item.emblem ? (
              <img
                src={item.emblem}
                alt={item.name}
                className={styles.logo}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            ) : (
              <div className={styles.logoFallback}>{item.name.charAt(0)}</div>
            )}
          </div>
          <span className={styles.name}>{item.name}</span>
          {item.subtitle && (
            <span className={styles.subtitle}>{item.subtitle}</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default EntityGrid;
