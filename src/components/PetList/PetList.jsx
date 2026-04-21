// src/components/PetList/PetList.jsx
// This component will be responsible for displaying a list of pets.
const PetList = (props) => {
  return (
    <div>
      <h1>Pet List</h1>

        {/* if there are pets, display them, otherwise show a message */}
      <div>
        {props.pets.length ? (
          <ul>
            {props.pets.map((pet) => (
              <li
                key={pet._id}
                style={{ cursor: "pointer", color: "#8BA6FF" }}
                onClick={() => props.handleSelect(pet)}
              >
                {pet.name}
              </li>
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