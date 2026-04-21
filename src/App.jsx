// src/App.jsx

import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";
import PetForm from "./components/PetForm/PetForm";

const App = () => {
  // all pets
  const [pets, setPets] = useState([]);
  // one picked pet
  const [selected, setSelected] = useState(null);
  // show/hide form
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // load pets when page opens
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      setPets(fetchedPets);
    };

    fetchPets();
  }, []);

  // save clicked pet
  const handleSelect = (pet) => {
    setSelected(pet);
    setIsFormOpen(false);
  };

  // toggle the form
  const handleFormView = () => {
    setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  return (
    <>
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />

      {isFormOpen ? <PetForm /> : <PetDetail selected={selected} />}
    </>
  );
};

export default App;