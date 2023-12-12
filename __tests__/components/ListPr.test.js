import { render, screen } from "@testing-library/react";
import { ListPr } from "../../src/components/ListPr";
import "@testing-library/jest-dom";

describe("ListPr", () => {
  it("renders heading and description correctly", () => {
    render(<ListPr />);

    expect(
      screen.getByRole("heading", { name: /registros de pr/i })
    ).toBeInTheDocument();
  });
  
  it("renders the logs correctly", () => {
    const logs = [
      { exercise: "deadlift", weight: 20, date: new Date() },
      { exercise: "deadlift", weight: 60, date: new Date() },
    ];

    render(<ListPr logs={logs}/>);

    expect(
        screen.getAllByTestId("log-box")
      ).toHaveLength(2);
  });
});
