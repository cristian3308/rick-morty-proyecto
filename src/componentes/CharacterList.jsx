// CharacterList.jsx
import React, { useState, useEffect } from 'react';
import CharacterCard from './CharacterCard';
import './pagina_principal/estilos_principal/CharacterCard.css'
import PaginationButtons from './PaginationButtons';
import './pagina_principal/estilos_principal/CharaterList.css';
import CharacterDetail from './CharacterDetail';

const CharacterList = ({ filterBy, sortBy }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&${filterBy}&${sortBy}`);
        const data = await response.json();
        setCharacters(data.results);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchCharacters();
  }, [page, filterBy, sortBy]);

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleBackToList = () => {
    setSelectedCharacter(null);
  };

  return (
    <div className="character-grid">
      {/* ... error and loading messages */}
      {!isLoading && !error && !selectedCharacter && (
        <div className="character-list-container">
          <PaginationButtons handleNext={handleNext} handlePrev={handlePrev} page={page} />
          <div className="character-grid-wrapper">
            {characters.map((character) => (
              <CharacterCard key={character.id} character={character} onCharacterClick={handleCharacterClick} />
            ))}
          </div>
        </div>
      )}

      {selectedCharacter && (
        <div nameClass="div-volver-button">
          <button onClick={handleBackToList} nameClass="volver-button">Volver a la lista</button>
          <CharacterDetail character={selectedCharacter} />
        </div>
      )}
    </div>
  );
};

export default CharacterList;
