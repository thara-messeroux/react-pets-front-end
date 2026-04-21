import { useState } from "react";

const PetForm = (props) => {
  // starter form shape
  const initialState = {
    name: "",
    age: "",
    breed: "",
    type: "Dog",
    image: "",
  };

  // if editing, preload the chosen pet
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState,
  );

  // update form as user types
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // send form data up to App
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (props.selected) {
      props.handleUpdatePet(formData, props.selected._id);
    } else {
      props.handleAddPet(formData);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Pet Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="age">Pet Age: </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="breed">Breed: </label>
        <input
          type="text"
          name="breed"
          id="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />

        <button type="submit">
          {props.selected ? "Update Pet" : "Add New Pet"}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
