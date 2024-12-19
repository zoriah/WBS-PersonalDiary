import { useState } from "react";
import "./index.css";
import Smallcards from "./components/Smallcards";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Smallcards/>
    </>
  );
}

export default App;
