import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  it("renders App correctly", () => {
    const { asFragment } = render(<App />);
    const nasaImg = screen.getByAltText("The word NASA in red");

    expect(asFragment()).toMatchSnapshot();
    expect(nasaImg).toHaveAttribute("src");
  });
});
