import axios from "axios";
import { Component, useEffect, useState } from "react";

export const withUser = (Component, userId) => {
  return (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(`/users/${userId}`);
        setUser(response.data);
      })();
    }, [userId]);

    return <Component {...props} user={user} />;
  };
};
