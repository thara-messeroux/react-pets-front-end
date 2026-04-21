// src/components/PetDetail/PetDetail.jsx

// This component will be responsible for displaying the details of a selected pet.

const PetDetail = (props) => {
  // if nothing is selected yet
  if (!props.selected) {
    return (
      <div>
        <h1>No Details</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{props.selected.name}</h1>
      <h2>Breed: {props.selected.breed}</h2>
      <p>Age: {props.selected.age} year(s) old</p>
    </div>
  );
};

export default PetDetail;
