import { render, screen } from "@testing-library/react";
import { SearchBox } from "./SearchBox";

describe("UsersList", () => {
  it("renders search element", () => {
    render(<SearchBox disabled={false} />);
    expect(screen.getByRole("search")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<SearchBox disabled={false} />);
    expect(screen.getByRole("search")).toHaveAttribute("placeholder");
  });

  it("renders disabled input", () => {
    render(<SearchBox disabled={true} />);
    expect(screen.getByRole("search")).toHaveAttribute("disabled");
  });
});
