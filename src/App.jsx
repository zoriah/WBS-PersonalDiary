// import { useState } from "react";
import Newentry from "./components/NewEntry/Newentry";
import Header from "./components/andwit/Header";
import Footer from "./components/andwit/Footer";
import Bigcard from "./components/BigCard/Bigcard";
import "./index.css";
// import Smallcards from "./components/Smallcards";
import Listcontainer from "./components/ListContainer/ListContainer";
import { localHelper, getAll } from "./helper/localStorageHelper";
import { useState, useEffect } from "react";
import entries from "./helper/entry";

// localHelper();

function App() {
  const [entrieId, setEntrieId] = useState(getAll());
  // console.log(entrieId[0].saveDate);
  const [tempId, setTempId] = useState(-1);

  useEffect(() => {
    console.log(tempId);
  }, [tempId]);

  return (
    <>
      <Header />
      {/* <Newentry /> */}
      {/* <Smallcards /> */}
      {/* <Bigcard entrieId={entrieId} /> */}
      <Listcontainer setTempId={setTempId} />
      <Footer />
    </>
  );
}

export default App;
