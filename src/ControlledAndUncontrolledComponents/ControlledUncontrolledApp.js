import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Step 1</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => goToNext({ name })}>Next</button>
    </>
  );
};

const StepTwo = ({ goToNext }) => {
  const [age, setAge] = useState(0);
  return (
    <>
      <h1>Step 2</h1>
      <input
        type="number"
        name="name"
        placeholder="Name"
        value={age}
        onChange={(e) => Number(setAge(e.target.value))}
      />
      <button onClick={() => goToNext({ age })}>Next</button>
    </>
  );
};
const StepThree = ({ goToNext }) => {
  const [hairColor, setHairColor] = useState("");
  return (
    <>
      <h1>Step 3</h1>
      <input
        type="text"
        name="hair"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button onClick={() => goToNext({ hairColor })}>Next</button>
    </>
  );
};

function ControlledUncontrolledApp() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  return (
    <>
      <ControlledModal
        shouldShow={shouldShowModal}
        onRequestClose={() => setShouldShowModal(false)}
      >
        <h1>Hello</h1>
      </ControlledModal>

      <button onClick={() => setShouldShowModal(!shouldShowModal)}>
        {shouldShowModal ? "Close Modal" : "Open Modal"}
      </button>

      <ControlledForm />

      <UncontrolledOnboardingFlow
        onFinish={(data) => console.log("Finish: ", data)}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default ControlledUncontrolledApp;
