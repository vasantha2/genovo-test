// import "./App.css";
// import { useEffect, useState } from "react";

// import axios from "axios";

// function App() {
//   const [people, setPeople] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const results = await axios.get(
//         "https://swapi.dev/api/people/?format=json"
//       );

//       setPeople(results.data.results);
//       console.log(results);
//     };

//     fetchData();
//   }, []);

//   return <div className="App"></div>;
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import CharacterDetails from "./CharacterDetails";
import Loader from "./Loader";

const API_URL = "https://swapi.dev/api/people/";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}?page=${currentPage}`);
        setCharacters(response.data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [currentPage]);

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleSelectCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const handleCloseModal = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="App">
      {loading && <Loader />}
      {error && <div>{error}</div>}
      <div className="characters">
        {characters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
            onSelect={handleSelectCharacter}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} disabled={!characters.length}>
          Next
        </button>
      </div>
      {selectedCharacter && (
        <CharacterDetails
          character={selectedCharacter}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;
