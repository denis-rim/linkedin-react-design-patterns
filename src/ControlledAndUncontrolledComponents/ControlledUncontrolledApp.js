import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { ControlledOnboardingFlow } from "./ControlledOnboardingFlow";
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
      <h1>Congratulations!</h1>
      <input
        type="text"
        name="hair"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button onClick={() => goToNext({})}>Next</button>
    </>
  );
};
const StepFour = ({ goToNext }) => {
  const [hairColor, setHairColor] = useState("");
  return (
    <>
      <h1>Step 4</h1>
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
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNext = (steepData) => {
    console.log(currentIndex);
    setOnboardingData({ ...onboardingData, ...steepData });
    setCurrentIndex(currentIndex + 1);
    onFinish();
  };

  const onFinish = () => {
    console.log(onboardingData);
  };

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

      <ControlledOnboardingFlow currentIndex={currentIndex} onNext={onNext}>
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 62 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default ControlledUncontrolledApp;
