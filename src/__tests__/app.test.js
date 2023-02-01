import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders App correctly", () => {
    const { asFragment } = render(<App />);
    const nasaImg = screen.getByAltText("red nasa logo");

    expect(asFragment()).toMatchSnapshot();
    expect(nasaImg).toHaveAttribute("src");
  });
});
