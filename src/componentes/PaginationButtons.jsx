// PaginationButtons.js
import React from 'react';
import './pagina_principal/estilos_principal/PaginationButtons.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const PaginationButtons = ({ handleNext, handlePrev, page }) => {
  const handleNextClick = () => {
    handleNext();
  };

  const handlePrevClick = () => {
    handlePrev();
  };
  

  return (
    <div className="pagination-buttons">
      <button onClick={handlePrevClick} disabled={page === 1} className="page-button">
        Página anterior
      </button>
      <button onClick={handleNextClick} className="page-button">
        Página siguiente
      </button>
    </div>
  );
};

export default PaginationButtons;
