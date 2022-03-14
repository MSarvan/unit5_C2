import { useState } from 'react'
import './App.css'
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <AddHouse /> : ""}
      <button className="toggleForm" onClick={() => {
        setShow(!show);
      }}>
        {show ? "Hide Form" : "Show Form"}
      </button>
      <br />
      <Rentals />
    </div>
  );
}

export default App