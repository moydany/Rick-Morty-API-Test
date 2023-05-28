import React from "react";
import { render, screen } from "@testing-library/react";
import Message from "../Message";

describe("Message", () => {
  test("renders message and image", () => {
    const messageText = "Loading...";
    const imageUrl = "https://example.com/loading.gif";

    render(<Message message={messageText} imageUrl={imageUrl} />);

    const messageElement = screen.getByText(messageText);
    const imageElement = screen.getByAltText("Message Image");

    expect(messageElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", imageUrl);
  });
});
