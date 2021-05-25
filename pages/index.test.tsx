import { render, screen } from "@testing-library/react";
import Root from "./index";

describe("Root", () => {
  it("renders without crashing", () => {
    render(<Root />);
    expect(screen.getByRole("heading")).toBeInTheDocument();
  });
});
