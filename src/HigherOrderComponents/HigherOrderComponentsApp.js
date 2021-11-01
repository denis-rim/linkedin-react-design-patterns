import { printProps } from "./printProps";
import { UserInfo } from "./UserInfo";
import { UserInfoForm } from "./UserInfoForm";
import { withUser } from "./withUser";

const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "123");

function App() {
  return (
    <>
      <UserInfoWrapped a={1} b="Hello" c={{ name: "Denis" }} />
      <UserInfoWithLoader />
      <UserInfoForm />
    </>
  );
}

export default App;
