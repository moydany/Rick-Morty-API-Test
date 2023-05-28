import React from "react";
import { Badge, Card } from "react-bootstrap";

export interface CharacterProps {
  data: {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: { name: string; url: string };
    location: { name: string; url: string };
    image: string;
    url: string;
    created: string;
  };
}

const Character: React.FC<CharacterProps> = ({ data }) => {
  let badgeVariant = "success";
  if (data.status === "Dead") {
    badgeVariant = "danger";
  } else if (data.status === "unknown") {
    badgeVariant = "dark";
  }

  return (
    <Card style={{}} className="">
      <Card.Img variant="top" src={data.image} />
      <Card.Body>
        <Card.Title style={{ minHeight: "50px" }}>{data.name}</Card.Title>
        <Card.Text style={{ minHeight: "50px" }}>
          {data.species} - {data.gender}
        </Card.Text>
        <Badge bg={badgeVariant} text="light">
          {data.status}
        </Badge>{" "}
      </Card.Body>
    </Card>
  );
};

export default Character;
