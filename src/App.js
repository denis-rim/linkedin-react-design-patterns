import "./App.css";
import { useState } from "react";
import ContainerComponentApp from "./ContainerComponents/ContainerComponentApp";
import AppLayoutComponents from "./LayoutComponents/AppLayoutComponents";

function App() {
  const [section, setSection] = useState(2);

  return (
    <>
      <div>
        <button onClick={() => setSection(1)}>Layout Component</button>
        <button onClick={() => setSection(2)}>Container Component</button>
      </div>
      {section === 1 ? (
        <AppLayoutComponents />
      ) : section === 2 ? (
        <ContainerComponentApp />
      ) : null}
    </>
  );
}

export default App;
