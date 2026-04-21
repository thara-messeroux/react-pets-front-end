// src/App.jsx

import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";

const App = () => {
  // all pets
  const [pets, setPets] = useState([]);
  // one selected pet
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // load pets on first page load
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      setPets(fetchedPets);
    };

    fetchPets();
  }, []);

  // save clicked pet into state
  const handleSelect = (pet) => {
    setSelected(pet);
  };

  // render the list and the details

  return (
    <>
      <PetList pets={pets} handleSelect={handleSelect} />
      <PetDetail selected={selected} />
    </>
  );
};

export default App;
