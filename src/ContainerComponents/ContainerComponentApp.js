import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

function ContainerComponentApp() {
  return (
    <>
      <UserLoader userId="222">
        <UserInfo />
      </UserLoader>

      <UserLoader userId="333">
        <UserInfo />
      </UserLoader>

      <UserLoader userId="444">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default ContainerComponentApp;
