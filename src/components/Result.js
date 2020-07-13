import React, { useContext } from "react";
import styled from "styled-components";
import { NumberContext } from "./Context/NumberContext";
export const Result = ({ result }) => {
  const { number, storedNumber } = useContext(NumberContext);
  const StyledResult = styled.div`
    position: relative;
    width: auto;
    margin-bottom: 30px;
    border-radius: 25px;
    font-family: "Montserrat";
    color: white;
    height: 80px;
    text-align: right;
    padding-right: 20px;
    padding-top: 50px;
    font-size: x-large;
    box-shadow: inset 0px 0px 20px -10px rgba(0, 0, 0, 0.75);
  `;
  return (
    <StyledResult>
      {!number.length && !storedNumber ? "0" : number || storedNumber}
    </StyledResult>
  );
};
