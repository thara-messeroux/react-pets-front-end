// src/components/PetDetail/PetDetail.jsx

// This component will be responsible for displaying the details of a selected pet.

const PetDetail = (props) => {
  // nothing picked yet
  if (!props.selected) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    );
  }

  // show chosen pet
  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Breed: {props.selected.breed}</h2>
      <p>Age: {props.selected.age} year(s) old</p>

      <div>
        <button onClick={() => props.handleFormView(props.selected)}>
          Edit Pet
        </button>

        <button onClick={() => props.handleDeletePet(props.selected._id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default PetDetail;