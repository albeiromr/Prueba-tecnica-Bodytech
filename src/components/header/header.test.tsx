import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

beforeEach(() => {
    render(<Header />);
})

test("The search input is visible for the user", () => {
    const searchInput = screen.getByLabelText("Find your song");
    expect(searchInput).toBeVisible();
})

test("the input value change when the user writes on it", () => {
    const searchInput = screen.getByLabelText("Find your song");
    userEvent.type(searchInput, "this is a test text");
    expect(searchInput).toHaveDisplayValue("this is a test text");
})