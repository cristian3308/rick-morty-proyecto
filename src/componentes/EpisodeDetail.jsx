// EpisodeDetail.jsx
import React from 'react';

const EpisodeDetail = ({ episode }) => {
  return (
    <div className="episode-detail">
      <h2>Detalles del episodio {episode.id}</h2>
      <p>Nombre: {episode.name}</p>
      <p>Fecha de emisión: {episode.air_date}</p>
      <p>Número de episodio: {episode.episode}</p>
    </div>
  );
};

export default EpisodeDetail;
