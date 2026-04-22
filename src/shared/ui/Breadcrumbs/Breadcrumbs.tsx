import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.module.css";

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav className={styles.nav} aria-label="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <>
            {index > 0 && <span className={styles.separator}>›</span>}
            {item.to && !isLast ? (
              <Link to={item.to} className={styles.link}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? styles.current : styles.link}>
                {item.label}
              </span>
            )}
          </>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
