import React, { useState } from "react";
import { NumberButton, Button } from "./NumberButton";
import { FunctionButton } from "./FunctionButton";
import { ClearButton } from "./ClearButton";
import styled from "styled-components";
import { Result } from "./Result";
import { BackButton } from "./BackButton";
import { Equal } from "./Equal";
import { Negative } from "./NegativeButton";
import { Zero } from "./Zero";
//import { NumberContext } from "./Context/NumberContext";
export const Keypad = () => {
  //const [result, setResult] = useState(0);
  // const [calculate, setCalculate] = useState([]);
  const Container = styled.div`
    position: relative;
    margin: auto;
    text-align: center;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 10px 80px rgba(0, 0, 0, 0.12);
    width: fit-content;
    border-radius: 50px;
    background-color: #3a4655;
    padding: 40px;
    margin-top: 20px;
  `;

  // const handleNumbers = (e) => {
  //   const value = Number(e.target.innerText);
  //   console.log(value);
  //   setResult(value);
  //   calculate.push(value);

  //   calculate.reduce((acc, curr) => console.log(acc + curr));
  // };
  // const handleSigns = (e) => {
  //   const value = e.target.innerText;
  //   if (value === "+") {
  //     calculate.push(value);
  //   }
  //   // value === "+" ? calculate.push(value) : console.log("error");
  //   //  calculate.push(value);
  //   console.log(calculate);
  // };
  return (
    <Container>
      <Result />
      <ClearButton />
      <BackButton />
      <Negative /> <FunctionButton sign="x" />
      {/* <FunctionButton sign="%" /> */}
      <br />
      <NumberButton sign={7} />
      <NumberButton sign={8} />
      <NumberButton sign={9} />
      <FunctionButton sign="-" />
      <br />
      <NumberButton sign={4} />
      <NumberButton sign={5} />
      <NumberButton sign={6} />
      <FunctionButton sign="+" />
      <br />
      <NumberButton sign={1} />
      <NumberButton sign={2} />
      <NumberButton sign={3} />
      <FunctionButton sign="/" />
      <br />
      <Zero sign={0} />
      <NumberButton sign="." />
      <Equal />
    </Container>
  );
};
