import { render, screen } from "@testing-library/react";
import { ListGymnastic } from "../../src/components/ListGymnastic";
import "@testing-library/jest-dom";

describe("ListGymnastic", () => {
  it("renders heading and description correctly", () => {
    render(<ListGymnastic />);

    expect(
      screen.getByRole("heading", { name: /registros de repetições/i })
    ).toBeInTheDocument();
  });
  
  it("renders the logs correctly", () => {
    const logs = [
      { exercise: "pull_up", repetition: 20, date: new Date() },
      { exercise: "push_up", repetition: 30, date: new Date() },
      { exercise: "muscle_up", repetition: 10, date: new Date() },
    ];

    render(<ListGymnastic logs={logs}/>);

    expect(
        screen.getAllByTestId("log-box")
      ).toHaveLength(3);
  });
});
