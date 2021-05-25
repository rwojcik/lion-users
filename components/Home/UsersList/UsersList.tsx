import styles from "./UsersList.module.css";

export type UsersListProps = {
  users: {
    id: number;
    name: string;
    username: string;
  }[];
};

export function UsersList({ users }: UsersListProps) {
  if (users.length === 0) {
    return (
      <section>
        <p className={styles.paragraph}>No users found!</p>
      </section>
    );
  }
  return (
    <section>
      <ol role="list" className={styles.list}>
        {users.map(({ id, name, username }) => (
          <li role="listitem" key={id}>
            <span>{name}</span>
            <span className={styles.username}> @{username}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
