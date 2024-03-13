import React, { useState } from 'react';
import Calendar from 'react-calendar';
import FormularioTarea from './FormularioTarea';
import ModalTarea from './ModalTarea';
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

  const handleAddTask = (taskData) => {
    setTasks([...tasks, taskData]);
    setShowForm(false);
  };

  const handleTaskClick = task => {
    setSelectedTask(task);
  };

  const handleModalClose = () => {
    setSelectedTask(null);
  };

  return (
    <div className="Tasks">
      <h1>Calendario de Tareas</h1>
      <Calendar onChange={handleDateChange} value={selectedDate} />
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowForm(false)}>&times;</span>
            <FormularioTarea onAddTask={handleAddTask} onCancel={() => setShowForm(false)} />
          </div>
        </div>
      )}
      {selectedTask && <ModalTarea task={selectedTask} onClose={handleModalClose} />}
    </div>
  );
}

export default Tasks;