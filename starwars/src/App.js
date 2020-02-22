import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from './components/CharacterCard';

import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    console.log("first render");
    axios.get('https://swapi.co/api/people/')
      .then(res => {
        console.log(res.data.results);
        setCharacters(res.data.results);
      });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* <div>Loading...</div> */}

      {characters.map(data => (
      <CharacterCard name={data.name}
                   birth_year={data.birth_year}
                  gender={data.gender}
                  /> 
      ))}

    </div>
  );
}

export default App;
