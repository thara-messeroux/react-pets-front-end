// src/components/PetList/PetList.jsx
// This component will be responsible for displaying a list of pets.
const PetList = (props) => {
  return (
    <div>
      <h1>Pet List</h1>

      <div>
        {props.pets.length ? (
          <ul>
            {props.pets.map((pet) => (
              <li key={pet._id}>{pet.name}</li>
            ))}
          </ul>
        ) : (
          <h2>No Pets Yet!</h2>
        )}
      </div>
    </div>
  );
};

export default PetList;
