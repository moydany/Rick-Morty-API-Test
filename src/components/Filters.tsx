import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

interface SearchFiltersProps {
  nameFilter: string;
  setNameFilter: (name: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  genderFilter: string;
  setGenderFilter: (gender: string) => void;
  setPage: (page: number) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  nameFilter,
  setNameFilter,
  statusFilter,
  setStatusFilter,
  genderFilter,
  setGenderFilter,
  setPage
}) => {
  const handleFilterChange = (filterSetter: (value: string) => void) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    filterSetter(event.target.value);
    setPage(1);
  };

  return (
    <Form>
      <Row className="justify-content-md-center">
        <Col xs={12} sm={4} md={3}>
          <Form.Control
            placeholder="Name"
            value={nameFilter}
            onChange={handleFilterChange(setNameFilter)}
            data-testid="name-input"
          />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <Form.Control
            as="select"
            value={statusFilter}
            onChange={handleFilterChange(setStatusFilter)}
            data-testid="status-select"
          >
            <option value="">Any Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <Form.Control
            as="select"
            value={genderFilter}
            onChange={handleFilterChange(setGenderFilter)}
            data-testid="gender-select"
          >
            <option value="">Any Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="genderless">Genderless</option>
            <option value="unknown">Unknown</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={4} md={3}>
          <Button
            onClick={() => {
              setPage(1);
              setNameFilter("");
              setStatusFilter("");
              setGenderFilter("");
            }}
            data-testid="clear-button"
          >
            Clear Filters
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchFilters;
