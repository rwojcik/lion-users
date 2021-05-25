import Head from "next/head";
import styles from "./Home.module.css";
import { SearchBox } from "./SearchBox/SearchBox";
import { UsersList } from "./UsersList/UsersList";
import { useQuery } from "react-query";
import {
  fetchUsers,
  UsersError,
  UsersResponse,
} from "../../queries/fetchUsers";
import React, { useState } from "react";
import { ErrorMessage } from "./ErrorMessage/ErrorMessage";

export function Home() {
  const { isLoading, error, data } = useQuery<UsersResponse, UsersError>(
    "users",
    fetchUsers
  );

  const [filter, setFilter] = useState("");

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

      <SearchBox disabled={isLoading} onChange={setFilter} />

      <UsersList
        filter={filter}
        loading={isLoading}
        users={data != null ? data : []}
      />

      <ErrorMessage message={error != null ? error.message : null} />
    </main>
  );
}
