// import { useState } from "react";
import Newentry from "./components/NewEntry/Newentry";
import Header from "./components/andwit/Header";
import Footer from "./components/andwit/Footer";
// import Bigcard from "./components/Bigcard";
import "./index.css";
// import Smallcards from "./components/Smallcards";
import Listcontainer from "./components/ListContainer/ListContainer";

function App() {
  return (
    <>
      <Header />
      <Newentry />
      {/* <Smallcards /> */}
      {/* <Bigcard /> */}
      <Listcontainer />
      <Footer />
    </>
  );
}

export default App;
