import React, { useContext } from "react";
import styled from "styled-components";
import { NumberContext } from "./Context/NumberContext";
export const Zero = ({ sign }) => {
  const Button = styled.button`
    background-color: #425062;
    color: white;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 10px 80px rgba(0, 0, 0, 0.12);
    border-radius: 25px;
    border: none;
    width: 46%;
    height: 100px;
    font-family: Montserrat;
    margin: 5px;
    font-size: x-large;
  `;

  const { handleSetDisplayValue } = useContext(NumberContext);

  return <Button onClick={() => handleSetDisplayValue(sign)}>{sign}</Button>;
};
