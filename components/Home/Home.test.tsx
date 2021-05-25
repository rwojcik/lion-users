import { render, screen } from "@testing-library/react";
import { Home } from "./Home";

jest.mock("react-query", () => ({
  useQuery: () => ({ isLoading: false, error: {}, data: [] }),
}));

describe("Home", () => {
  it("renders without crashing", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: "Users list" })
    ).toBeInTheDocument();
  });
});
