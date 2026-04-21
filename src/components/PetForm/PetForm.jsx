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

  // if editing, preload chosen pet
  const [formData, setFormData] = useState(
    props.selected ? props.selected : initialState,
  );

  // update form as user types
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  // send form up to App
  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (props.selected) {
      props.handleUpdatePet(formData, props.selected._id);
    } else {
      props.handleAddPet(formData);
    }

    // reset form after submit
    setFormData(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="type">Select Type </label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="Dog">Dog</option>
          <option value="Cat">Cat</option>
          <option value="Rabbit">Rabbit</option>
          <option value="Fish">Fish</option>
        </select>

        <label htmlFor="age">Age </label>
        <input
          id="age"
          name="age"
          type="number"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label htmlFor="breed">Breed </label>
        <input
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        />

        <label htmlFor="image">Image </label>
        <input
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
        />

        <button type="submit">
          {props.selected ? "Update Pet" : "Add New Pet"}
        </button>
      </form>
    </div>
  );
};

export default PetForm;
