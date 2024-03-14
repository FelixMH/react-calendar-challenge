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
                                    <a href='http://google.com'>
                                        <div key={taskIndex} className={`mt-2 p-2 rounded ${taskColor}`}>
                                            <div className="font-bold">{task.title}</div>
                                            <div>{task.description}</div>
                                            <div>{task.time}</div>
                                        </div>
                                    </a>
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
