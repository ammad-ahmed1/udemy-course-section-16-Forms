import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ControlledInputs from "./components/form/ControlledInputs";
import MultipleControlledInputs from "./components/form/MultipleControlledInputs";
import UncontrolledInputs from "./components/form/UncontrolledInputs";

function App() {
  return (
    <>
      <ControlledInputs />
      <MultipleControlledInputs />
      <UncontrolledInputs />
    </>
  );
}

export default App;
