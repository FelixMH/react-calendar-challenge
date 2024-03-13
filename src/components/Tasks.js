import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Asegúrese de importar el archivo CSS también

function App() {
  const [date, setDate] = useState(new Date());

  const onChange = date => {
    setDate(date);
  };

  return (
    <div className="App">
      <h1>React Calendar Example</h1>
      <Calendar
        onChange={onChange}
        value={date}
      />
    </div>
  );
}

export default App;