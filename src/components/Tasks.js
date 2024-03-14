import React, { useState } from 'react';
import Calendar from 'react-calendar';
import FormularioTarea from './FormularioTarea';
import ModalTarea from './ModalTarea';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';

function Tasks() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);

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

  return (
        <div className="flex justify-center items-center h-screen flex-col">
          <h1>Calendario de Tareas</h1>
          <div className='w-full flex justify-center items-center'>
            <Calendar className="w-full" onChange={handleDateChange} value={selectedDate} />
          </div>
        {showForm && (

          <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
            <div className='w-full bg-dark backdrop-blur-sm p-5 rounded-md flex flex-col justify-center items-center gap-5'>
              {/* <h2 className='text-2xl text-black font-bold'> { title } </h2> */}
              <FormularioTarea />
              
            </div>
          </div>
          // <div className="modal">
          //   <div className="modal-content">
          //     <span className="close" onClick={() => setShowForm(false)}>&times;</span>
          //     {}
          //     <FormularioTarea
          //       onAddTask={handleAddTask}
          //       onCancel={() => setShowForm(false)}
          //       selectedDate={selectedDate}
          //     />
          //   </div>
          // </div>
        )}
      {selectedTask && <ModalTarea task={selectedTask} onClose={handleModalClose} />}
    </div>
  );
}

export default Tasks;