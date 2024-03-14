// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';
// import FormularioTarea from './FormularioTarea';
// import ModalTarea from './ModalTarea';

// function Tasks() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showForm, setShowForm] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.108:5550/tareas");
//       setTasks(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error al cargar las tareas:", error);
//     }
//   };

//   const handleDateChange = date => {
//     setSelectedDate(date);
//     setShowForm(true);
//   };

//   const handleAddTask = async (taskData) => {
//     try {
//       const formattedDate = selectedDate.toISOString().split('T')[0];
//       const taskWithDate = { ...taskData, fecha: formattedDate };
//       await axios.post("/tarea", taskWithDate);
//       setTasks([...tasks, taskData]);
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error al enviar la tarea:", error);
//     }
//   };

//   const handleTaskClick = task => {
//     setSelectedTask(task);
//   };

//   const handleModalClose = () => {
//     setSelectedTask(null);
//   };

//   const getTileClassName = ({ date, view }) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     if (tasks.length > 0) {
//       const task = tasks.find(task => task.fecha === formattedDate);
//       if (task) {
//         if (task.typeFK === 1) {
//           return 'blue'; 
//         } else if (task.typeFK === 2) {
//           return 'red'; 
//         }
//       }
//     }
//     return null;
//   };

//   return (
//     <div className="flex justify-center items-center h-screen flex-col">
//       <h1 className='text-black text-3xl font-bold mb-5'>Calendario de Tareas</h1>
//       {loading ? ( // Si loading es true, se muestra un indicador de carga
//         <p>Cargando tareas...</p>
//       ) : (
//         <div className='w-full flex justify-center items-center'>
//           {/* <FormularioTarea /> */}
//           <Calendar className="w-full" onChange={handleDateChange} value={selectedDate} tileClassName={getTileClassName} />
//         </div>
//       )}
//       {showForm && (
//         <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
//           <div className='w-full bg-dark backdrop-blur-sm p-5 rounded-md flex flex-col justify-center items-center gap-5'>
//             <FormularioTarea onAddTask={handleAddTask} onCancel={() => setShowForm(false)} selectedDate={selectedDate} />
//           </div>
//         </div>
//       )}
//       {selectedTask && <ModalTarea task={selectedTask} onClose={handleModalClose} />}
//     </div>
//   );
// }

// export default Tasks;



import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);

    const [modalOpen, setModalOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [type, setType] = useState('');

    const handleModalOpen = () => {
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
    };

    const handleSaveTask = () => {
        const newTask = {
            title,
            description,
            date,
            time,
            type
        };
        setTasks([...tasks, newTask]);
        setTitle('');
        setDescription('');
        setDate(new Date());
        setTime('');
        setType('');
        handleModalClose();
    };

    return (
        <div className="container mx-auto">
            <div className="text-center mt-10">
                <h1 className="text-3xl font-bold mb-4">Calendar</h1>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} className="mb-4" />
            </div>

            <div className="grid grid-cols-7 gap-4 mt-4">
                {[...Array(31).keys()].map((day, index) => (
                    <div key={index} className="border p-4">
                        <div className="font-bold">{index + 1}</div>
                        {tasks.map((task, taskIndex) => {
                            const taskDate = new Date(task.date);
                            if (taskDate.getDate() === index + 1) {
                                let taskColor = 'bg-blue-300'; // Default color
                                if (task.type === 'Priority') {
                                    taskColor = 'bg-red-300';
                                } else if (task.type === 'Waiting') {
                                    taskColor = 'bg-yellow-300';
                                } // Add more conditions for other types
                                return (
                                    <div key={taskIndex} className={`mt-2 p-2 rounded ${taskColor}`}>
                                        <div className="font-bold">{task.title}</div>
                                        <div>{task.description}</div>
                                        <div>{task.time}</div>
                                    </div>
                                );
                            }
                            return null;
                        })}
                    </div>
                ))}
            </div>

            <button onClick={handleModalOpen} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
                Add Task
            </button>

            {modalOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4">Add Task</h2>
                        <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                        <DatePicker selected={date} onChange={date => setDate(date)} className="w-full mb-2 p-2 border rounded" />
                        <input type="time" placeholder="Time" value={time} onChange={e => setTime(e.target.value)} className="w-full mb-2 p-2 border rounded" />
                        <select value={type} onChange={e => setType(e.target.value)} className="w-full mb-2 p-2 border rounded">
                            <option value="">Select Type</option>
                            <option value="Priority">Priority</option>
                            <option value="Waiting">Waiting</option>
                            {/* Add more options here */}
                        </select>
                        <div className="flex justify-end">
                            <button onClick={handleModalClose} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded">
                                Cancel
                            </button>
                            <button onClick={handleSaveTask} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Calendar;



// GPT 1

// import React, { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import axios from 'axios';
// import FormularioTarea from './FormularioTarea';
// import ModalTarea from './ModalTarea';

// function Tasks() {
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [showForm, setShowForm] = useState(false);
//   const [tasks, setTasks] = useState([]);
//   const [selectedTask, setSelectedTask] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadTasks();
//   }, []);

//   const loadTasks = async () => {
//     try {
//       const response = await axios.get("http://192.168.0.108:5550/tareas");
//       setTasks(response.data);
//       setLoading(false);
//     } catch (error) {
//       console.error("Error al cargar las tareas:", error);
//     }
//   };

//   const handleDateChange = date => {
//     setSelectedDate(date);
//     setShowForm(true);
//   };

//   const handleAddTask = async (taskData) => {
//     try {
//       const formattedDate = selectedDate.toISOString().split('T')[0];
//       const taskWithDate = { ...taskData, fecha: formattedDate };
//       await axios.post("http://192.168.0.108:5550/tarea", taskWithDate);
//       setTasks([...tasks, taskWithDate]);
//       setShowForm(false);
//     } catch (error) {
//       console.error("Error al enviar la tarea:", error);
//     }
//   };

//   const handleTaskClick = (date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     const task = tasks.find(task => task.fecha === formattedDate);
//     setSelectedTask(task);
//   };

//   const handleModalClose = () => {
//     setSelectedTask(null);
//   };

//   const getTileClassName = ({ date }) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     const task = tasks.find(task => task.fecha === formattedDate);
//     if (task) {
//       return task.typeFK === 1 ? 'bg-blue-500 text-white' : 'bg-red-500 text-white';
//     }
//     return null;
//   };

//   return (
//     <div className="flex justify-center items-center h-screen flex-col">
//       <h1 className='text-black text-3xl font-bold mb-5'>Calendario de Tareas</h1>
//       {loading ? (
//         <p>Cargando tareas...</p>
//       ) : (
//         <div className='w-full flex justify-center items-center'>
//           <Calendar
//             className="w-full"
//             onChange={handleDateChange}
//             value={selectedDate}
//             tileClassName={getTileClassName}
//             onClickDay={(date, event) => handleTaskClick(date)}
//           />
//         </div>
//       )}
//       {showForm && (
//         <div className='fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
//           <div className='w-full bg-dark backdrop-blur-sm p-5 rounded-md flex flex-col justify-center items-center gap-5'>
//             <FormularioTarea onAddTask={handleAddTask} onCancel={() => setShowForm(false)} selectedDate={selectedDate} />
//           </div>
//         </div>
//       )}
//       {selectedTask && (
//         <ModalTarea task={selectedTask} date={selectedDate} onClose={handleModalClose} />
//       )}
//     </div>
//   );
// }

// export default Tasks;


