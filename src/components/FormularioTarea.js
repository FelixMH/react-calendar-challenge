import React, { useState } from 'react';

function FormularioTarea({ onAddTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!title.trim()) return;
    onAddTask(title, description, url);
    setTitle('');
    setDescription('');
    setUrl('');
  };



  return (
    <div className="formulario-tarea">
      <h2>Agregar Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>URL:</label>
          <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
        </div>
        <div className="form-buttons">
          <button type="submit">Guardar</button>
          <button type="button" onClick={onCancel}>Cancelar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioTarea;