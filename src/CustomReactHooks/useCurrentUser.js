import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrentUser = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    (async () => {
      const response = await axios.get("/current-user");
      setUser(response.data);
    })();
  }, []);

  return user;
};
