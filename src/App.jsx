import { useState } from "react";
import Newentry from "./components/NewEntry/Newentry";
import Header from "./components/andwit/Header";
import Footer from "./components/andwit/Footer";
import "./index.css";
import Smallcards from "./components/Smallcards";
import Listcontainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <>
      <Header />
      <Newentry />
      <Smallcards/>
      <Listcontainer />
      <Footer />
    </>
  );
}

export default App;
