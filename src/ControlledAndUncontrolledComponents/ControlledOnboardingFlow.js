import React from "react";

export const ControlledOnboardingFlow = ({
  children,
  currentIndex,
  onNext,
}) => {
  const goToNext = (steepData) => {
    onNext(steepData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};
