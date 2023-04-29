import { FakeFetch } from "./api/fakefetch";
import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [employees, setEmpolyee] = useState([]);

  const handleData = () => {
    FakeFetch("https://example.com/api/employees")
      .then((respone) => {
        console.log({ data: respone.data.employees });
        setEmpolyee(respone.data.employees);
      })
      .catch((error) => console.error(error.message));
  };
  return (
    <div className="App">
      <h1 className="app-header">tanaypratap's box</h1>
      <div className="App">
        <h1>Employee List</h1>
      </div>
      <button onClick={handleData}> get employee list</button>
      <ul style={{ listStyle: "none" }}>
        {employees.map((item) => {
          return (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.workExperience}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
