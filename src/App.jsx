// src/App.jsx

import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";

// This component will be responsible for fetching the list of pets and passing it down to the PetList component.
const App = () => {
  // app state
  const [pets, setPets] = useState([]);

  useEffect(() => {
    // load pets on first page load
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      setPets(fetchedPets);
    };

    fetchPets();
  }, []);

  return <PetList pets={pets} />;
};

export default App;
