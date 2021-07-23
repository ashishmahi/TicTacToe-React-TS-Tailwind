import React from "react";
import { render } from "@testing-library/react";
import Board from "./Board";
import { getGridFor } from "../Game/gridHelper";

describe("Board", () => {
  it("should render with given grid", () => {
    const { container } = render(<Board grid={getGridFor(3)} />);
    expect(container).toMatchSnapshot();
  });
});
