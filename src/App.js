import "./App.css";
import { people } from "./people";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { RegularList } from "./RegularList";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>{name}</h1>
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={people}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
    </div>
  );
};
const RightHandComponent = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

function App() {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandComponent name="Denis" />
      <RightHandComponent message="Hello" />
    </SplitScreen>
  );
}

export default App;
