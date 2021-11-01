import { Component } from "react";

export const printProps = (Component) => {
  return (props) => {
    console.log(props);
    return <Component {...props} />;
  };
};
