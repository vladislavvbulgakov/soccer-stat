import styles from "./EntityCard.module.css";

interface CardProps {
  name: string;
  emblem?: string | null;
  subtitle?: string;
  onClick?: () => void;
}

const EntityCard = ({ name, emblem, subtitle, onClick }: CardProps) => {
  return (
    <button className={styles.card} onClick={onClick}>
      <div className={styles.logoWrapper}>
        {emblem ? (
          <img
            src={emblem}
            alt={name}
            className={styles.logo}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
        ) : (
          <div className={styles.logoFallback}>{name.charAt(0)}</div>
        )}
      </div>

      <span className={styles.name}>{name}</span>

      {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
    </button>
  );
};

export default EntityCard;
