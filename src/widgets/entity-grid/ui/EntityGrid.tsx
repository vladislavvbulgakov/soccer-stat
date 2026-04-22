import styles from "./EntityGrid.module.css";
import type { EntityGridProps } from "../model/types";
import EntityCard from "@/shared/ui/EntityCard/EntityCard";

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
        <EntityCard
          key={item.id}
          name={item.name}
          emblem={item.emblem}
          subtitle={item.subtitle}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </div>
  );
};

export default EntityGrid;
