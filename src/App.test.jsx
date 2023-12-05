import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import App from "./App";

describe("Simple working test", () => {
    it("the title is visible", () => {
        render(<App />);
        expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
        expect(screen.getByText(/Vite \+ React/i)).toBeVisible();
    });

    it("should increment count on click", async () => {
        render(<App />);
        userEvent.click(screen.getByRole("button"));
        expect(await screen.findByText(/count is:\s*|\n*1/i)).toBeInTheDocument();
    });
});
