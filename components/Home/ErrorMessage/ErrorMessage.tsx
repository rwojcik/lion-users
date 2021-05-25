import styles from "./ErrorMessage.module.css";

type ErrorMessageProps = {
  message: string | null;
};

export function ErrorMessage({ message }: ErrorMessageProps) {
  if (message != null) {
    return (
      <section>
        <p className={styles.paragraph}>{message}</p>
      </section>
    );
  }
  return null;
}
