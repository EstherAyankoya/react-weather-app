import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 class="text-center mb-4">Esther's Weather App</h1>
        <Weather defaultCity="London"/>
        <footer>
          This project was coded by Esther Ayankoya

          and is{" "}
          <a
            href="https://github.com/EstherAyankoya/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://app.netlify.com/sites/effulgent-squirrel-e6b44b/configuration/general"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
    
    </div>
    </div>);
     
}

export default App;
