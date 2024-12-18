import { useState } from "react";
import Newentry from "./components/NewEntry/Newentry";
import Header from "./components/andwit/Header";
import Footer from "./components/andwit/Footer";
import "./index.css";

function App() {
  return (
    <>
      <Header />
      <Newentry />
      <Footer />
    </>
  );
}

export default App;
