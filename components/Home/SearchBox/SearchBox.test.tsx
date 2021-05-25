import { render, screen } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

describe("UsersList", () => {
  it("renders search element", () => {
    render(<SearchBox />);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<SearchBox />);
    expect(screen.getByRole("search")).toHaveAttribute("placeholder");
  });
});
