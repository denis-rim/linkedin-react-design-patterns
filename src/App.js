import "./App.css";
import { useState } from "react";
import ContainerComponentApp from "./ContainerComponents/ContainerComponentApp";
import ControlledUncontrolledApp from "./ControlledAndUncontrolledComponents/ControlledUncontrolledApp";
import HigherOrderComponentsApp from "./HigherOrderComponents/HigherOrderComponentsApp";
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
        <button onClick={() => setSection(4)}>HOC Components</button>
      </div>
      {section === 1 ? (
        <AppLayoutComponents />
      ) : section === 2 ? (
        <ContainerComponentApp />
      ) : section === 3 ? (
        <ControlledUncontrolledApp />
      ) : section === 4 ? (
        <HigherOrderComponentsApp />
      ) : null}
    </>
  );
}

export default App;
