import React from 'react';

function ModalTarea({ task, onClose }) {
  const { title, description, url } = task;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{title}</h2>
        <p>{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">Ir al enlace</a>
        )}
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalTarea;