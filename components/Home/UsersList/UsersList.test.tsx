import { render, screen } from "@testing-library/react";
import { UsersList, UsersListProps } from "./UsersList";

describe("UsersList", () => {
  const testData: UsersListProps = {
    users: [
      { id: 1, name: "Leanne Graham", username: "Bret" },
      { id: 2, name: "Ervin Howell", username: "Antonette" },
    ],
  };

  it("renders list element", () => {
    render(<UsersList users={testData.users} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders list with number of children", () => {
    render(<UsersList users={testData.users} />);
    expect(screen.getByRole("list").childNodes).toHaveLength(
      testData.users.length
    );
  });

  it("renders paragraph when missing results", () => {
    render(<UsersList users={[]} />);
    expect(screen.getByText("No users found!")).toBeInTheDocument();
  });
});
