import { render, screen } from "@testing-library/react";
import App from "../App";

test("affiche DentaFlow", () => {
  render(<App />);
  expect(screen.getByText(/learn more/i)).toBeInTheDocument();
});
