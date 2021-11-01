import axios from "axios";
import React, { useEffect, useState } from "react";

export const CurrentUserLoader = ({ children }) => {
  const [user, setUser] = useState(null);

  console.log(user);

  useEffect(() => {
    (async () => {
      const response = await axios.get("current-user");
      setUser(response.data);
    })();
  }, []);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { user });
        }

        return child;
      })}
    </>
  );
};
