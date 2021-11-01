import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";

function ContainerComponentApp() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default ContainerComponentApp;
