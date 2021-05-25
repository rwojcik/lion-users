import styles from "./UsersList.module.css";

export type UsersListProps = {
  users: {
    id: number;
    name: string;
    username: string;
  }[];
  loading: boolean;
  filter: string;
};

export function UsersList({ loading, users, filter }: UsersListProps) {
  if (loading) {
    return (
      <section>
        <ol role="list" className={styles.list}>
          {Array.from({ length: 10 }, (_item, index) => (
            <li role="listitem" key={index}>
              <div
                style={{ animationDelay: `0.${index}s` }}
                className={styles.skeleton}
              >
                loading
              </div>
            </li>
          ))}
        </ol>
      </section>
    );
  }

  if (users.length === 0) {
    return (
      <section>
        <p className={styles.paragraph}>No users found!</p>
      </section>
    );
  }

  const filteredUsers =
    filter.length > 0
      ? users.filter((user) => user.name.includes(filter))
      : users;

  if (filteredUsers.length === 0) {
    return (
      <section>
        <p className={styles.paragraph}>No users with given name found!</p>
      </section>
    );
  }

  return (
    <section>
      <ol role="list" className={styles.list}>
        {filteredUsers.map(({ id, name, username }) => (
          <li role="listitem" key={id}>
            <span>{name}</span>
            <span className={styles.username}> @{username}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
