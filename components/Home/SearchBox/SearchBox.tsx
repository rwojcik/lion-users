import styles from "./SearchBox.module.css";

export function SearchBox() {
  return (
    <section className={styles.section}>
      <input
        role="search"
        className={styles.input}
        type="text"
        placeholder="Search by user name…"
      ></input>
    </section>
  );
}
