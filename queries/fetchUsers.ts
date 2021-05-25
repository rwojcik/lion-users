export type User = {
  id: number;
  name: string;
  username: string;
};

export type UsersResponse = User[];

export class UsersError extends Error {
  constructor(message: string, public response: unknown) {
    super(message);
    this.name = "UsersError";
  }
}

function isUser(user: unknown): user is User {
  return (
    typeof user === "object" &&
    user != null &&
    user.hasOwnProperty("id") &&
    user.hasOwnProperty("name") &&
    user.hasOwnProperty("username")
  );
}

export async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.status !== 200) {
    throw new UsersError("Unexpected response status", response);
  }

  const body = await response.json();

  if (Array.isArray(body) && body.every(isUser)) {
    return body;
  }
  throw new UsersError("Unexpected response body", body);
}
