import React from 'react';

function ModalTarea({ task, onClose, onUpdateCalendar }) {
  const { title, description, url } = task;

  const handleClose = () => {
    onUpdateCalendar(); // Llama a la función onUpdateCalendar proporcionada por el componente padre
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-white p-5 rounded-md flex flex-col justify-center items-center gap-5'>
        <h2 className='text-2xl text-black font-bold'>{title}</h2>
        <p>{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">Ir al enlace</a>
        )}
        <button onClick={handleClose}>Cerrar</button>
      </div>
    </div>
  );
}

export default ModalTarea;
