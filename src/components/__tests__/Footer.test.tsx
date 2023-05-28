import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("renders footer text", () => {
    render(<Footer />);

    const footerText = screen.getByText("Made with ♥ by Moy");

    expect(footerText).toBeInTheDocument();
  });
});
