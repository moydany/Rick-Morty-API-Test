import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { imageUrls } from "../../utils/ImgUrls";

describe("Header", () => {
  test("renders logo image", () => {
    render(<Header />);

    const logoImage = screen.getByAltText("Rick and Morty");

    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute("src", imageUrls.RICK_AND_MORTY_LOGO);
  });
});
