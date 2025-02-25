import { render, screen } from "@testing-library/react";
import Page from "../src/pages";

jest.mock("@/hooks/useUsers/useListUsers", () => ({
  useListUsers: () => {
    return {
      users: [],
    };
  },
}));

describe("Home", () => {
  it("renders a header", () => {
    render(<Page />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("renders a table", () => {
    render(<Page />);
    const userTable = screen.getByTestId("user-table");
    expect(userTable).toBeInTheDocument();
  });
});
