// src/App.jsx
import { useState, useEffect } from "react";
import * as petService from "./services/petService";
import PetList from "./components/PetList/PetList";
import PetDetail from "./components/PetDetail/PetDetail";
import PetForm from "./components/PetForm/PetForm";

const App = () => {
  // app state
  const [pets, setPets] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // load pets when page opens
    const fetchPets = async () => {
      const fetchedPets = await petService.index();
      if (fetchedPets.err) throw new Error(fetchedPets.err);
      setPets(fetchedPets);
    };

    fetchPets();
  }, []);

  // save clicked pet
  const handleSelect = (pet) => {
    setSelected(pet);
    setIsFormOpen(false);
  };

  // toggle form for new or edit
  const handleFormView = (pet) => {
    if (!pet?._id) setSelected(null);
    setIsFormOpen(!isFormOpen);
  };

  // create pet
  const handleAddPet = async (formData) => {
    try {
      const newPet = await petService.create(formData);
      if (newPet.err) throw new Error(newPet.err);

      setPets([newPet, ...pets]);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // update pet
  const handleUpdatePet = async (formData, petId) => {
    try {
      const updatedPet = await petService.update(formData, petId);
      if (updatedPet.err) throw new Error(updatedPet.err);

      const updatedPetList = pets.map((pet) =>
        pet._id !== updatedPet._id ? pet : updatedPet,
      );

      setPets(updatedPetList);
      setSelected(updatedPet);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  // delete pet
  const handleDeletePet = async (petId) => {
    try {
      const deletedPet = await petService.deletePet(petId);
      if (deletedPet.err) throw new Error(deletedPet.err);

      setPets(pets.filter((pet) => pet._id !== deletedPet._id));
      setSelected(null);
      setIsFormOpen(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <PetList
        pets={pets}
        handleSelect={handleSelect}
        handleFormView={handleFormView}
        isFormOpen={isFormOpen}
      />

      {isFormOpen ? (
        <PetForm
          handleAddPet={handleAddPet}
          selected={selected}
          handleUpdatePet={handleUpdatePet}
        />
      ) : (
        <PetDetail
          selected={selected}
          handleFormView={handleFormView}
          handleDeletePet={handleDeletePet}
        />
      )}
    </>
  );
};

export default App;