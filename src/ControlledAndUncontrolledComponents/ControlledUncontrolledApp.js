import { useState } from "react";
import { ControlledForm } from "./ControlledForm";
import { ControlledModal } from "./ControlledModal";
import { UncontrolledModal } from "./UncontrolledModal";
import { UncontrolledForm } from "./UncontrolledForm";

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
    </>
  );
}

export default ControlledUncontrolledApp;
