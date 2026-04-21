// src/components/PetList/PetList.jsx
// This component will be responsible for displaying a list of pets.
// shows the list of pets

// shows the list of pets
const PetList = (props) => {
  return (
    <div>
      <h1>Pet List</h1>

      {/* show pets or empty message */}
      <div>
        {props.pets.length ? (
          <ul>
            {props.pets.map((pet) => (
              <li
                key={pet._id}
                // make pet names feel clickable
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

      {/* open or close the form */}
      <button onClick={props.handleFormView}>
        {props.isFormOpen ? "Close Form" : "New Pet"}
      </button>
    </div>
  );
};

export default PetList;