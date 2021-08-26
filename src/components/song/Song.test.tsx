import { render, screen } from "@testing-library/react";
import Song from "./Song";

beforeEach(() => {
    render(<Song 
        title={"21 guns"}
        artist={"green day"}
    />)
})

test("The song component shows its props properly and is visibñe for the user", () => {
    const title = screen.getByText("21 guns");
    expect(title).toBeVisible();
    expect(title).toHaveTextContent("21 guns");

    const artist = screen.getByText("green day");
    expect(artist).toBeVisible();
    expect(artist).toHaveTextContent("green day");
})