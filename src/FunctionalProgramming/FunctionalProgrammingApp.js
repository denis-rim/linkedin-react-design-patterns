import { BigSuccessButton, DangerButton } from "./composition";
import { BigSuccessButtonPart, DangerButtonPart } from "./partiallyApply";
import { RecursiveComponent } from "./RecursiveComponent";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function FunctionalProgrammingApp() {
  return (
    <>
      <DangerButton text="Danger" />
      <BigSuccessButton text="Noice" />
      <DangerButtonPart text="Partially Danger" />
      <BigSuccessButtonPart text="Partially Noice" />
      <RecursiveComponent data={nestedObject} />
    </>
  );
}

export default FunctionalProgrammingApp;
