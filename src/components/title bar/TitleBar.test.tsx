import { render, screen } from "@testing-library/react";
import TitleBar from "./TitleBar";

beforeEach(() => {
    render(<TitleBar />);
})

test("the title is visible in the document and inside the component tree", () => {
    const title = screen.getByText("Your Results");
    expect(title).toBeVisible();
    expect(title).toBeInTheDocument();
})