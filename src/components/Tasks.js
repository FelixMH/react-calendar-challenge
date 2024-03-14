import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import axios from 'axios';
import FormularioTarea from './FormularioTarea'; 
import ModalTarea from './ModalTarea'; 

function Tasks() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await axios.get("http://192.168.0.108:5550/tareas");
      setTasks(response.data);
      setLoading(false); 
    } catch (error) {
      console.error("Error al cargar las tareas:", error);
    }
  };

  const handleDateChange = date => {
    setSelectedDate(date);
    setShowForm(true);
  };

  const handleAddTask = async (taskData) => {
    try {
      const formattedDate = selectedDate.toISOString().split('T')[0];
      const taskWithDate = { ...taskData, fecha: formattedDate };
      await axios.post("/tarea", taskWithDate);
      setTasks([...tasks, taskData]);
      setShowForm(false);
    } catch (error) {
      console.error("Error al enviar la tarea:", error);
    }
  };

  const handleTaskClick = task => {
    setSelectedTask(task);
  };

  const handleModalClose = () => {
    setSelectedTask(null);
  };

const getTileClassName = ({ date }) => {
  const formattedDate = date.toISOString().split('T')[0];
  if (tasks.length > 0) { 
    const task = tasks.find(task => task.fecha === formattedDate);
    if (task) {
      if (task.typeFK === 1) {
        return 'blue'; 
      } else if (task.typeFK === 2) {
        return 'red'; 
      }
    }
  }
  return null;
};
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <h1>Calendario de Tareas</h1>
      {loading ? ( // Si loading es true, se muestra un indicador de carga
        <p>Cargando tareas...</p>
      ) : (
        <div className='w-full flex justify-center items-center'>
          <Calendar className="w-full" onChange={handleDateChange} value={selectedDate} tileClassName={getTileClassName} />
        </div>
      )}
      {showForm && (
        <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
          <div className='w-full bg-dark backdrop-blur-sm p-5 rounded-md flex flex-col justify-center items-center gap-5'>
            <FormularioTarea onAddTask={handleAddTask} onCancel={() => setShowForm(false)} selectedDate={selectedDate} />
          </div>
        </div>
      )}
      {selectedTask && <ModalTarea task={selectedTask} onClose={handleModalClose} />}
    </div>
  );
}

export default Tasks;