import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Character from "./components/Character";
import Filters from "./components/Filters";
import PaginationControls from "./components/PaginationControls";
import Header from "./components/Header";
import Message from "./components/Message";
import { CharacterData } from "./utils/Types";
import { fetchCharacters } from "./utils/Api";
import { imageUrls } from "./utils/ImgUrls";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [characters, setCharacters] = useState<CharacterData[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");

  const loadCharacters = async () => {
    setLoading(true);
    const data = await fetchCharacters(
      page,
      nameFilter,
      statusFilter,
      genderFilter
    );
    if (data.info) {
      setCharacters(data.results);
      setTotalPages(data.info.pages);
    } else {
      setCharacters([]);
      setTotalPages(0);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadCharacters();
  }, [page, nameFilter, statusFilter, genderFilter]);

  return (
    <>
      <Container>
        <Header />
        <div className="mb-3">
          <Filters
            nameFilter={nameFilter}
            setNameFilter={setNameFilter}
            statusFilter={statusFilter}
            setStatusFilter={setStatusFilter}
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
            setPage={setPage}
          />
        </div>
        {loading ? (
          <Message message="Loading..." imageUrl={imageUrls.LOADING_GIF} />
        ) : characters.length === 0 ? (
          <Message message="Look... it's empty" imageUrl={imageUrls.EMPTY} />
        ) : (
          <>
            <Row className="justify-content-md-center">
              {characters.map((character) => (
                <Col
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                  className="mb-4"
                  key={character.id}
                >
                  <Character data={character} />
                </Col>
              ))}
            </Row>

            <Row className="justify-content-center">
              <Col xs={12} md={6}>
                <PaginationControls
                  page={page}
                  totalPages={totalPages}
                  setPage={setPage}
                />
              </Col>
            </Row>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default App;
