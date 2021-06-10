import { render, screen } from "../test-utils";
import App from "../../pages/index";

// jest.mock('next/router');

describe("App", () => {
  it("renders without crashing", () => {
      render(<App />);
    expect(
      screen.getByRole("main", { name: "Example Todo App" })
    ).toBeInTheDocument();
  });
});
