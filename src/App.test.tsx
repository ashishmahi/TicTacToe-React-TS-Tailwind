import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
describe("App Test", () => {
  it("should render app", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });
});
