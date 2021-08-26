import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

beforeEach(() => {
    render(<Footer />);
})

test("the footer tesxt is visible for the user", () => {
    const footerText = screen.getByText("Prueba tecnica Bodytech, Albeiro Marín")
    expect(footerText).toBeVisible();
})