// CharacterDetail.jsx
import React from 'react';


const CharacterDetail = ({ character }) => {
  return (
    <div className="character-detail">
      <div className="detail-image-container">
        <img src={character.image} alt={character.name} />
      </div>
      <div className="detail-info">
        <h2>{character.name}</h2>
        <p className="status-label">Estado: {character.status}</p>
        <p className="species-label">Especie: {character.species}</p>
        <p className="episode-label">Episodios:</p>
        <ul>
          {character.episode.map((episode, index) => (
            <li key={index}>
              <a href={`/episode/${episode.split('/').pop()}`}>Episodio {episode.split('/').pop()}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
