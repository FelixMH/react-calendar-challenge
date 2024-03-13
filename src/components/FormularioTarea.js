import React, { useState } from 'react';

function FormularioTarea({ onAddTask, onCancel }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!title.trim()) return;
  //   onAddTask(title, description, url);
  //   setTitle('');
  //   setDescription('');
  //   setUrl('');
  // };



  return (
    <div className='md:w-2/5 mx-auto mt-10'>
      <h2 className='font-black text-3xl text-center uppercase'>Administrador</h2>

      <form className='bg-white shadow-xl rounded-lg py-10 px-5 mb-10'>
        {/* Input de dia ( tipo fecha) eliminado por el momento. */}
        {/* <div className='mb-5'>
          <label htmlFor="day" className='block text-gray-700 uppercase font-bold'>Dia</label>

          <input 
            id='day'
            type="date"
            placeholder='Dia'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
          />
        </div> */}
        
        {/* 2do input */}
        <div className='mb-5'>
          <label htmlFor="title" className='block text-gray-700 uppercase font-bold'>Título</label>

          <input 
            id='title'
            type="text"
            placeholder='Título'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
          />
        </div>
        
        {/* 3er input */}
        <div className='mb-5'>
          <label htmlFor="hour" className='block text-gray-700 uppercase font-bold'>Hora</label>

          <select 
            id='hour'
            type="number"
            min={0}
            max={24}
            step={1}
            placeholder='Hora'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
          >
            <option>00:00</option>
            <option>01:00</option>
            <option>02:00</option>
            <option>03:00</option>
            <option>04:00</option>
            <option>05:00</option>
            <option>06:00</option>
            <option>07:00</option>
            <option>08:00</option>
            <option>09:00</option>
            <option>10:00</option>
            <option>11:00</option>
            <option>12:00</option>
            <option>13:00</option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
            <option>23:00</option>
            <option>24:00</option>
          </select>
        </div>
        
        
        {/* 4to input */}
        <div className='mb-5'>
          <label htmlFor="hour" className='block text-gray-700 uppercase font-bold'>Tipo / Categoria</label>

          <select 
            id='type'
            type="text"
            min={0}
            max={24}
            step={1}
            placeholder='Hora'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
          >
            <option value={0}>-- Selecciona un tipo por favor --</option>
            <option value={1}>Prioritario</option>
            <option value={2}>En Espera</option>
            
          </select>
        </div>
        
        
        {/* 5to input */}
        <div className='mb-5'>
          <label htmlFor="description" className='block text-gray-700 uppercase font-bold'>Descripción</label>

          <textarea 
            id='type'
            type="text"
            placeholder='Descripción'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
            cols={10}
            rows={4}
          ></textarea>
        </div>
        
        
        {/* 6to input */}
        <div className='mb-5'>
          <label htmlFor="uri" className='block text-gray-700 uppercase font-bold'>URL</label>

          <input 
            id='uri'
            type="text"
            placeholder='URL'
            className='border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black'
          />
        </div>
        
        
        {/* 7to input */}
        <div className='mb-5'>

          <input 
            id='btn'
            type="submit"
            className='font-bold border-2 w-full p-2 mt-2 rounded-md text-white bg-indigo-500 uppercase hover:bg-indigo-600 cursor-pointer'
            cols={10}
            rows={4}
          ></input>
        </div>
      </form>

    </div>
    // <div className="container">
    //   <h2>Agregar Tarea</h2>
    //   <form onSubmit={handleSubmit}>
    //     <div className="form-group">
    //       <label>Título:</label>
    //       <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label>Descripción:</label>
    //       <textarea value={description} onChange={e => setDescription(e.target.value)} />
    //     </div>
    //     <div className="form-group">
    //       <label>URL:</label>
    //       <input type="text" value={url} onChange={e => setUrl(e.target.value)} />
    //     </div>
    //     <div className="form-buttons">
    //       <button type="submit">Guardar</button>
    //       <button type="button" onClick={onCancel}>Cancelar</button>
    //     </div>
    //   </form>
    // </div>
  );
}

export default FormularioTarea;