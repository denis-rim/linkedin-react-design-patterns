import { useEffect, useState } from "react";

export const ControlledForm = () => {
  const [inputError, setInputError] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 2) {
      setInputError("Username must be 2 or more characters");
    } else {
      setInputError("");
    }
  }, [name, age, hairColor]);

  return (
    <form action="">
      {inputError && <p>{inputError}</p>}
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => Number(setAge(e.target.value))}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};
