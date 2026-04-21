// src/App.jsx

import { useState, useEffect } from "react";
import * as petService from "./services/petService";

const App = () => {
  // holds all pets
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // load pets when page opens
    const fetchPets = async () => {
      const fetchedPets = await petService.index();

      // quick test: did the API send pets back?
      console.log(fetchedPets);

      setPets(fetchedPets);
    };

    fetchPets();
  }, []);

  return <h1>Hello world!</h1>;
};

export default App;
