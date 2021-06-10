import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from "../test-utils";
import Card from "../../components/Card";

describe("Card component", () => {
  test("should render the heading", () => {
    render(<Card title={"Test title"} />);

    const heading = screen.getByText(
      /Test title/i
    );

    // we can only use toBeInTheDocument because it was imported
    // in the jest.setup.js and configured in jest.config.js
    expect(heading).toBeInTheDocument();
  });
});