import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "222");

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Denis" }} />
      <UserInfoWithLoader />
    </>
  );
}

export default App;
