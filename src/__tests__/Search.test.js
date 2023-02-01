import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  it("renders Search component", () => {
    const { asFragment } = render(<Search />);
    const inputElement = screen.getByTestId("search-input");

    expect(asFragment()).toMatchSnapshot();
    expect(inputElement).toHaveAttribute("class", "search-input");
  });
});
