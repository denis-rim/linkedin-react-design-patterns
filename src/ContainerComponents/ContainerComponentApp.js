import { CurrentUserLoader } from "./CurrentUserLoader";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function ContainerComponentApp() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/222" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/products/2222" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
    </>
  );
}

export default ContainerComponentApp;
