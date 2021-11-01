import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncontrolledForm";
import { UncontrolledOnboardingFlow } from "./UncontrolledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={goToNext}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <button onClick={goToNext}>Next</button>
  </>
);

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

      <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
    </>
  );
}

export default ControlledUncontrolledApp;
