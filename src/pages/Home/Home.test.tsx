import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Home } from ".";

test("deve renderizar o titulo da lista de posts", () => {
    render(
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
    expect(screen.getByText(/lista de posts/i)).toBeInTheDocument();
});