import React from "react";
import "./App.css";
import { Keypad } from "./components/Keypad";
import { NumberProvider } from "./components/Context/NumberContext";
function App() {
  return (
    <NumberProvider>
      <Keypad />
    </NumberProvider>
  );
}

export default App;
