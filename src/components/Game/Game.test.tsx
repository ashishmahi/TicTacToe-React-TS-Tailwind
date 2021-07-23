import React from "react";
import { render } from "@testing-library/react";
import Game from "./Game";
describe("Game Test", () => {
  it("should render game", () => {
    const { container } = render(<Game numberOfColumns={3} />);
    expect(container).toMatchSnapshot();
  });
});
