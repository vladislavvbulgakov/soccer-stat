import styles from "./SearchInput.module.css";
import type { SearchInputProps } from "../model/types";
import { IconSearch } from "@tabler/icons-react";

const SearchInput = ({
  value,
  onChange,
  placeholder = "Search",
}: SearchInputProps) => {
  return (
    <div className={styles.wrapper}>
      <IconSearch className={styles.icon} />

      <input
        className={styles.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};
export default SearchInput;
