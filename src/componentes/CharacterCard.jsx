// CharacterCard.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterCard = ({ character, onCharacterClick }) => {
  const handleClick = () => {
    onCharacterClick(character);
  };

  return (
    <div className="character-card" onClick={handleClick}>
      <div className="card-image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="card-info">
      <h2 className="character-name">{character.name}</h2>
        <p className="status-label">Estado: {character.status}</p>
        <p className="species-label">Especie: {character.species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
