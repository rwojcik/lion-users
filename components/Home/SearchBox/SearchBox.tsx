import { ChangeEventHandler } from "react";
import styles from "./SearchBox.module.css";

type SearchBoxProps = {
  disabled: boolean;
  onChange: (value: string) => void;
};

export function SearchBox({ disabled, onChange }: SearchBoxProps) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (target) => {
    onChange(target.currentTarget.value);
  };
  return (
    <section className={styles.section}>
      <input
        onChange={handleChange}
        role="search"
        disabled={disabled}
        className={styles.input}
        type="text"
        placeholder="Search by user name…"
      />
    </section>
  );
}
