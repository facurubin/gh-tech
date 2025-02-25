import { render, screen } from "@testing-library/react";
import Profile from "../src/pages/profile/[username]";

const profileMock = {
  name: "test",
};

describe("Profile", () => {
  it("renders a header", () => {
    render(<Profile repositories={[]} profile={profileMock} />);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
  });
  it("renders a profile", () => {
    render(<Profile repositories={[]} profile={profileMock} />);
    const header = screen.getByTestId("profile-section");
    expect(header).toBeInTheDocument();
  });
});
