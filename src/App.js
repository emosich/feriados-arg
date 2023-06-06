import React from 'react';
import "./App.css"


const HOLIDAYS = [
  {
    "date": "2023-01-01",
    "name": "Año Nuevo"
  },
  {
    "date": "2023-02-27",
    "name": "Carnaval"
  },
  {
    "date": "2023-02-28",
    "name": "Carnaval"
  },
  {
    "date": "2023-03-24",
    "name": "Día Nacional de la Memoria por la Verdad y la Justicia"
  },
  {
    "date": "2023-04-07",
    "name": "Viernes Santo"
  },
  {
    "date": "2023-05-01",
    "name": "Día del Trabajador"
  },
  {
    "date": "2023-05-25",
    "name": "Día de la Revolución de Mayo"
  },
  {
    "date": "2023-06-17",
    "name": "Día Paso a la Inmortalidad del General Martín Miguel de Güemes"
  },
  {
    "date": "2023-06-20",
    "name": "Día Paso a la Inmortalidad del General Manuel Belgrano"
  },
  {
    "date": "2023-07-09",
    "name": "Día de la Independencia"
  },
  {
    "date": "2023-08-21",
    "name": "Día Paso a la Inmortalidad del General José de San Martín"
  },
  {
    "date": "2023-10-16",
    "name": "Día del Respeto a la Diversidad Cultural"
  },
  {
    "date": "2023-11-20",
    "name": "Día de la Soberanía Nacional"
  },
  {
    "date": "2023-12-08",
    "name": "Día de la Inmaculada Concepción"
  },
  {
    "date": "2023-12-25",
    "name": "Navidad"
  }
]

const today = new Date();
const nextHoliday = HOLIDAYS.find(holiday => new Date
  (holiday.date) > today)


const App = () => {

  return (
    <div className="container">
      <h2 className="heading">El próximo feriado en Argentina es el:</h2>
      {nextHoliday ? (
        <div>
          <p className="holiday-name">{nextHoliday.name}</p>
          <p className="holiday-date">{nextHoliday.date}</p>
        </div>
      ) : (
        <p>No hay próximos feriados.</p>
      )}
    </div>
  );
};

export default App;
