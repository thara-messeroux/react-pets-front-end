// src/components/PetForm/PetForm.jsx
// This component will be responsible for displaying a form to add a new pet.
import { useState } from "react";

const PetForm = (props) => {
  // form box
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    breed: "",
  });

  // update typed values
  // this is a common pattern for handling form input changes in React
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // submit form data to the server
  return (
    <div>
      <form>
        <label htmlFor="name">Pet Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        // age input
        <label htmlFor="age">Pet Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        // breed input
        <label htmlFor="breed">Breed: </label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />

        // submit button
        <button type="submit">Add New Pet</button>
      </form>
    </div>
  );
};

export default PetForm;
