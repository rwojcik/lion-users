import { render, screen } from "@testing-library/react";
import { UsersList } from "./UsersList";

describe("UsersList", () => {
  const users = [
    { id: 1, name: "Leanne Graham", username: "Bret" },
    { id: 2, name: "Ervin Howell", username: "Antonette" },
  ];

  it("renders list element", () => {
    render(<UsersList users={users} loading={false} filter="" />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("renders list with number of children", () => {
    render(<UsersList users={users} loading={false} filter="" />);
    expect(screen.getByRole("list").childNodes).toHaveLength(users.length);
  });

  it("renders paragraph when missing results", () => {
    render(<UsersList users={[]} loading={false} filter="" />);
    expect(screen.getByText("No users found!")).toBeInTheDocument();
  });

  it("renders skeleton elements when loading", () => {
    render(<UsersList users={[]} loading={true} filter="" />);
    expect(screen.getAllByText("loading")).toHaveLength(10);
  });

  it("filters elements", () => {
    render(<UsersList users={users} loading={false} filter="Ervin" />);
    expect(screen.getAllByRole("listitem")).toHaveLength(1);
  });
});
