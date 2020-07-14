import React, { createContext, useState } from "react";

export const NumberContext = createContext();

export const NumberProvider = ({ children }) => {
  const [number, setNumber] = useState("0");
  const [storedNumber, setStoredNumber] = useState("");
  const [functionType, setFunctionType] = useState("");
  const handleSetDisplayValue = (num) => {
    if ((!number.includes(".") || num !== ".") && number.length < 8) {
      setNumber(`${(number + num).replace(/^0+/, "")}`);
    }
  };
  const handleSetStoredValue = () => {
    setStoredNumber(number);
    setNumber("");
  };
  const handleClearValue = () => {
    setNumber("0");
  };
  const handleBackButton = () => {
    if (number === "") setNumber("0");

    setNumber(number.substring(0, number.length - 1));
  };
  const handleSetCalcFunction = (type) => {
    if (number) {
      setFunctionType(type);
      handleSetStoredValue();
    }
    if (storedNumber) {
      setFunctionType(type);
    }
  };
  const handleNegative = () => {
    if (number) {
      if (number > 0) {
        setNumber(`-${number}`);
      } else {
        const positiveNumber = number.slice(1);
        setNumber(positiveNumber);
      }
    } else if (storedNumber > 0) {
      setStoredNumber(`-${storedNumber}`);
    } else {
      const positiveNumber = storedNumber.slice(1);
      setStoredNumber(positiveNumber);
    }
  };
  const math = () => {
    if (number && storedNumber) {
      switch (functionType) {
        case "+":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) + parseFloat(number)) * 100}`
              ) / 100
            }`
          );
          break;
        case "-":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) - parseFloat(number)) * 100}`
              ) / 100
            }`
          );
          break;
        case "x":
          setStoredNumber(
            `${
              Math.round(
                `${parseFloat(storedNumber) * parseFloat(number) * 1000}`
              ) / 1000
            }`
          );
          break;
        case "/":
          setStoredNumber(
            `${
              Math.round(
                `${(parseFloat(storedNumber) / parseFloat(number)) * 1000}`
              ) / 1000
            }`
          );
          break;
        default:
          break;
      }
    }
    console.log(number, storedNumber);
    setNumber("");
  };
  return (
    <NumberContext.Provider
      value={{
        handleSetStoredValue,
        handleClearValue,
        handleSetDisplayValue,
        handleBackButton,
        handleSetCalcFunction,
        number,
        math,
        storedNumber,
        setNumber,
        handleNegative,
      }}
    >
      {children}
    </NumberContext.Provider>
  );
};
