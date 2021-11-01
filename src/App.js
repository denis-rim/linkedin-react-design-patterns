import "./App.css";
import { useState } from "react";
import ContainerComponentApp from "./ContainerComponents/ContainerComponentApp";
import ControlledUncontrolledApp from "./ControlledAndUncontrolledComponents/ControlledUncontrolledApp";
import AppLayoutComponents from "./LayoutComponents/AppLayoutComponents";

function App() {
  const [section, setSection] = useState(1);

  return (
    <>
      <div>
        <button onClick={() => setSection(1)}>Layout Component</button>
        <button onClick={() => setSection(2)}>Container Component</button>
        <button onClick={() => setSection(3)}>
          Controlled and Uncontrolled Components
        </button>
      </div>
      {section === 1 ? (
        <AppLayoutComponents />
      ) : section === 2 ? (
        <ContainerComponentApp />
      ) : section === 3 ? (
        <ControlledUncontrolledApp />
      ) : null}
    </>
  );
}

export default App;
