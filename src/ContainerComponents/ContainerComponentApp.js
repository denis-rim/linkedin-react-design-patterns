import axios from "axios";
import { useEffect } from "react";
import { CurrentUserLoader } from "./CurrentUserLoader";
import { DataSource } from "./DataSource";
import { ProductInfo } from "./ProductInfo";
import { ResourceLoader } from "./ResourceLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

const getServerData = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

const getLocalStorageData = (key) => () => {
  return localStorage.getItem(key);
};

const Text = ({ message }) => <h1>{message}</h1>;

function ContainerComponentApp() {
  useEffect(() => {
    localStorage.setItem("message", "Hello from localStorage");
  }, []);

  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <DataSource
        getDataFunction={getServerData("/users/234")}
        resourceName="user"
      >
        <UserInfo />
      </DataSource>
      <DataSource
        getDataFunction={getLocalStorageData("message")}
        resourceName="message"
      >
        <Text />
      </DataSource>
    </>
  );
}

export default ContainerComponentApp;
