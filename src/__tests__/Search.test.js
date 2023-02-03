import { render, screen, fireEvent } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const setSearchResults = jest.fn();

  it("renders Search component", () => {
    const { asFragment } = render(<Search setSearchResults={setSearchResults}/>);
    const inputElement = screen.getByTestId("search-input");
    const buttonElement =screen.getByTestId("search-button");

    expect(asFragment()).toMatchSnapshot();
    expect(inputElement).toHaveAttribute("class", "search-input");
    expect(buttonElement).toHaveAttribute("class", "search-button");
  });

  it("calls correct function by clicking button", async () => {
    render(
      <Search setSearchResults={setSearchResults} />
    );
    await fireEvent.click(screen.getByTestId("search-button"));

    expect(setSearchResults).toHaveBeenCalled();
  });
});
