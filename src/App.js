import "./App.css";
import { useState } from "react";
import ContainerComponentApp from "./ContainerComponents/ContainerComponentApp";
import ControlledUncontrolledApp from "./ControlledAndUncontrolledComponents/ControlledUncontrolledApp";
import CustomReactHooksApp from "./CustomReactHooks/CustomReactHooksApp";
import FunctionalProgrammingApp from "./FunctionalProgramming/FunctionalProgrammingApp";
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
        <button onClick={() => setSection(5)}>Custom React Hooks</button>
        <button onClick={() => setSection(6)}>Functional Programming</button>
      </div>
      {section === 1 ? (
        <AppLayoutComponents />
      ) : section === 2 ? (
        <ContainerComponentApp />
      ) : section === 3 ? (
        <ControlledUncontrolledApp />
      ) : section === 4 ? (
        <HigherOrderComponentsApp />
      ) : section === 5 ? (
        <CustomReactHooksApp />
      ) : section === 6 ? (
        <FunctionalProgrammingApp />
      ) : null}
    </>
  );
}

export default App;
