import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataSource = ({
  getDataFunction = () => {},
  resourceName,
  children,
}) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getDataFunction();
      setState(data);
    })();
  }, [getDataFunction]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: state });
        }

        return child;
      })}
    </>
  );
};
