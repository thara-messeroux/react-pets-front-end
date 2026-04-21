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

  // make the date look nicer
  const prettyDate = new Date(props.selected.createdAt).toLocaleDateString();

  // show chosen pet
  return (
    <div>
      <h1>
        {props.selected.name} - {props.selected.age} years old
      </h1>
      <h2>Type: {props.selected.type}</h2>
      <h2>Breed: {props.selected.breed}</h2>
      <p>Date Added: {prettyDate}</p>

      <img src={props.selected.image} alt={props.selected.name} width="250" />

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