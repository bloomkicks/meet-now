import { useState } from "react";

const useValidator = (validator, error) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isActive, setIsActive] = useState(false);

  const isValid = validator(enteredValue);
  const hasError = isActive && !isValid;
  error = hasError && error

  const makeActive = (e) => {
    setIsActive(true);
  };
  const setValue = (e) => {
    setEnteredValue(e.target.value);
  };
  const reset = (e) => {
    setIsActive(false);
    setEnteredValue("");
  };

  return {
    enteredValue,
    error,
    isValid,
    makeActive,
    setValue,
    reset,
  };
};

export default useValidator