import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders App correctly", () => {
    const { asFragment } = render(<App />);
    const nasaImg = screen.getByAltText("NASA in red stylised font");

    expect(asFragment()).toMatchSnapshot();
    expect(nasaImg).toHaveAttribute("src");
  });
});
