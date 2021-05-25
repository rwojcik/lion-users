import Head from "next/head";
import styles from "./Home.module.css";
import { SearchBox } from "./SearchBox/SearchBox";
import { UsersList } from "./UsersList/UsersList";

export function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <title>Users list</title>
        <meta name="description" content="Lion users list" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1 className={styles.title}>Users list</h1>
      </header>

      <SearchBox />

      <UsersList users={[{ id: 1, name: "Leanne Graham", username: "Bret" }]} />
    </main>
  );
}
