import React, { useState } from "react";
import axios from "axios";

function FormularioTarea({ onAddTask, onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [type, setType] = useState(0);
  const [hour, setHour] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const taskData = {
      title: title,
      description: description,
      url: url,
      typefk: type,
      fecha: null,
      hora: hour,
    };

    try {
      await axios.post("/tarea", [taskData]);
      onAddTask(taskData);
      setTitle("");
      setDescription("");
      setUrl("");
      setType(0);
      setHour("");
    } catch (error) {
      console.error("Error al enviar la tarea:", error);
    }
  };

  return (
    <div className="md:w-2/5 mx-auto mt-10">
      <h2 className="font-black text-3xl text-center uppercase">
        Administrador
      </h2>

      <form
        className="bg-white shadow-xl rounded-lg py-10 px-5 mb-10"
        onSubmit={handleSubmit}
      >
        {/* 2do input */}
        <div className="mb-5">
          <label
            htmlFor="title"
            className="block text-gray-700 uppercase font-bold"
          >
            Título
          </label>

          <input
            id="title"
            type="text"
            placeholder="Título"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* 3er input */}
        <div className="mb-5">
          <label
            htmlFor="hour"
            className="block text-gray-700 uppercase font-bold"
          >
            Hora
          </label>

          <select
            id="hour"
            value={hour}
            onChange={(e) => setHour(e.target.value)}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black"
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
        <div className="mb-5">
          <label
            htmlFor="type"
            className="block text-gray-700 uppercase font-bold"
          >
            Tipo / Categoría
          </label>

          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black"
          >
            <option value={0}>-- Selecciona un tipo por favor --</option>
            <option value={1}>Prioritario</option>
            <option value={2}>En Espera</option>
          </select>
        </div>

        {/* 5to input */}
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-700 uppercase font-bold"
          >
            Descripción
          </label>

          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descripción"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black"
            cols={10}
            rows={4}
          ></textarea>
        </div>

        {/* 6to input */}
        <div className="mb-5">
          <label
            htmlFor="uri"
            className="block text-gray-700 uppercase font-bold"
          >
            URL
          </label>

          <input
            id="uri"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="URL"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-500 text-black"
          />
        </div>

        {/* 7to input */}
        <div className="mb-5">
          <button
            type="submit"
            className="font-bold border-2 w-full p-2 mt-2 rounded-md text-white bg-indigo-500 uppercase hover:bg-indigo-600 cursor-pointer"
          >
            Agregar Tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioTarea;
