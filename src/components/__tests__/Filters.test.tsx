import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import SearchFilters from "../Filters";

describe("SearchFilters", () => {
  const mockSetPage = jest.fn();
  const mockSetNameFilter = jest.fn();
  const mockSetStatusFilter = jest.fn();
  const mockSetGenderFilter = jest.fn();

  beforeEach(() => {
    render(
      <SearchFilters
        nameFilter=""
        setNameFilter={mockSetNameFilter}
        statusFilter=""
        setStatusFilter={mockSetStatusFilter}
        genderFilter=""
        setGenderFilter={mockSetGenderFilter}
        setPage={mockSetPage}
      />
    );
  });

  test("renders name input", () => {
    const nameInputs = screen.getAllByTestId("name-input");
    expect(nameInputs.length).toBeGreaterThan(0);
    nameInputs.forEach((input) => {
      expect(input).toBeInTheDocument();
    });
  });

  test("renders status select", () => {
    const statusSelect = screen.getByTestId("status-select");
    expect(statusSelect).toBeInTheDocument();
  });

  test("renders gender select", () => {
    const genderSelect = screen.getByTestId("gender-select");
    expect(genderSelect).toBeInTheDocument();
  });

  test("renders clear button", () => {
    const clearButton = screen.getByTestId("clear-button");
    expect(clearButton).toBeInTheDocument();
  });

  test("clear button resets filters", () => {
    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(mockSetPage).toHaveBeenCalledWith(1);
    expect(mockSetNameFilter).toHaveBeenCalledWith("");
    expect(mockSetStatusFilter).toHaveBeenCalledWith("");
    expect(mockSetGenderFilter).toHaveBeenCalledWith("");
  });

  afterEach(cleanup);

  test("renders status select", () => {
    const statusSelects = screen.getAllByTestId("status-select");
    expect(statusSelects.length).toBeGreaterThan(0);
    statusSelects.forEach((select) => {
      expect(select).toBeInTheDocument();
    });
  });
  test("renders gender select", () => {
    const genderSelects = screen.getAllByTestId("gender-select");
    expect(genderSelects.length).toBeGreaterThan(0);
    genderSelects.forEach((select) => {
      expect(select).toBeInTheDocument();
    });
  });

  test("renders clear button", () => {
    const clearButtons = screen.getAllByTestId("clear-button");
    expect(clearButtons.length).toBeGreaterThan(0);
    clearButtons.forEach((button) => {
      expect(button).toBeInTheDocument();
    });
  });

  test("clear filters button clears filters", () => {
    const setNameFilter = jest.fn();
    const setStatusFilter = jest.fn();
    const setGenderFilter = jest.fn();
    const setPage = jest.fn();

    render(
      <SearchFilters
        nameFilter="test"
        setNameFilter={setNameFilter}
        statusFilter="alive"
        setStatusFilter={setStatusFilter}
        genderFilter="male"
        setGenderFilter={setGenderFilter}
        setPage={setPage}
      />
    );

    const clearButtons = screen.getAllByTestId("clear-button");

    clearButtons.forEach((button) => {
      fireEvent.click(button);
    });

    expect(setNameFilter).toHaveBeenCalledWith("");
    expect(setStatusFilter).toHaveBeenCalledWith("");
    expect(setGenderFilter).toHaveBeenCalledWith("");
    expect(setPage).toHaveBeenCalledWith(1);
  });
});
