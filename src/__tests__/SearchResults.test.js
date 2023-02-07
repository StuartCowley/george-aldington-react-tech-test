import { render, screen } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  let resultsMock = ["test1", "test2"];

  it("renders results correctly", () => {
    const { asFragment } = render(<SearchResults results={resultsMock} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correctly if there are no results", () => {
    resultsMock = [];
    render(<SearchResults results={resultsMock} />);
    const displayMessage = screen.getByText(
      "Sorry, we couldn't find anything."
    );

    expect(displayMessage).toBeInTheDocument();
  });
});
