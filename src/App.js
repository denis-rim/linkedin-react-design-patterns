import "./App.css";
import { Modal } from "./Modal";
import { NumberedList } from "./NumberedList";
import { persons, products } from "./peoplesAndProducts";
import { LargePersonListItem } from "./people/LargePersonListItem";
import { SmallPersonListItem } from "./people/SmallPersonListItem";
import { LargeProductListItem } from "./products/LargeProductListItem";
import { SmallProductListItem } from "./products/SmallProductListItem";
import { RegularList } from "./RegularList";
import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({ name }) => {
  return (
    <div style={{ backgroundColor: "green" }}>
      <h1>{name}</h1>
      <h3>Persons small:</h3>
      <RegularList
        items={persons}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <h3>Persons large:</h3>
      <Modal>
        <NumberedList
          items={persons}
          resourceName="person"
          itemComponent={LargePersonListItem}
        />
      </Modal>
    </div>
  );
};
const RightHandComponent = ({ message }) => {
  return (
    <div style={{ backgroundColor: "red" }}>
      <h1>{message}</h1>
      <h3>Products small:</h3>
      <RegularList
        items={products}
        resourceName="product"
        itemComponent={SmallProductListItem}
      />
      <h3>Products large:</h3>
      <Modal>
        <NumberedList
          items={products}
          resourceName="product"
          itemComponent={LargeProductListItem}
        />
      </Modal>
    </div>
  );
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Denis" />
        <RightHandComponent message="Hello" />
      </SplitScreen>
    </>
  );
}

export default App;
