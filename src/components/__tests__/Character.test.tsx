import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // This is at the top level
import Character from "../Character";

describe("Character", () => {
  test("renders Character component", () => {
    render(
      <Character
        data={{
          id: 1,
          name: "Rick Sanchez",
          status: "Alive",
          species: "Human",
          type: "",
          gender: "Male",
          origin: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1"
          },
          location: {
            name: "Earth",
            url: "https://rickandmortyapi.com/api/location/1"
          },
          image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
          url: "https://rickandmortyapi.com/api/character/1",
          created: "2017-11-04T18:48:46.250Z"
        }}
      />
    );

    test("renders character name", () => {
      expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    });

    test("renders character species and gender", () => {
      expect(screen.getByText("Human - Male")).toBeInTheDocument();
    });

    test("renders character status", () => {
      expect(screen.getByText("Alive")).toBeInTheDocument();
    });

    test("renders character origin", () => {
      expect(screen.getByText("Origin: Earth")).toBeInTheDocument();
    });

    test("renders character current location", () => {
      expect(screen.getByText("Location: Earth")).toBeInTheDocument();
    });
  });
});
