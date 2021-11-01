import { useRef } from "react";

export const UncontrolledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      nameInput.current.value,
      ageInput.current.value,
      hairColorInput.current.value
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" ref={nameInput} />
      <input type="number" name="age" placeholder="Age" ref={ageInput} />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair color"
        ref={hairColorInput}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
