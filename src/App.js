import logo from "./logo.svg";
import { useEffect, useState } from "react";
import { getSections } from "./firebase";
import "./App.css";

function App() {
  const [sections, setSections] = useState();
  const getAllSections = () => {};
  useEffect(() => {
    try {
      getSections().then((u) => {
        console.log(u);
        setSections(u);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, [setSections]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ul>
          {sections && sections.map((section) => <li>{section.name}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
