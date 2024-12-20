// import { useState } from "react";
import { useState, useEffect } from "react";

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { localHelper } from "./helper/localStorageHelper.js";

import BigCard from "./components/BigCard/BigCard.jsx";
import NewEntry from "./components/NewEntry/NewEntry.jsx";
import Listcontainer from "./components/ListContainer/ListContainer.jsx";

import "./index.css";

localHelper();

function App() {
  const [selectedCard, setSelectedCard] = useState(-2);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
    console.log(`Selected card ID: ${cardId}`);
  };

  useEffect(() => {
    const setFirstEntriesInLocalStorage = () => {
      localHelper();
    };
    setFirstEntriesInLocalStorage();
  }, []);

  const openNewEntry = () => {
    setSelectedCard(-2);
  };

  const closeBigCard = () => {
    setSelectedCard(-1);
  };

  const getView = (position) => {
    {
      /*   >=0 BigCard
            -1 alle Karten auflisten
            -2 NewEntry anzeigen oder keine Einträge in LocalStorage vorhanden
            
    */
    }
    switch (selectedCard) {
      case -1:
        if (position === 2) {
          console.log("open ListContainer");
          return (
            <Listcontainer
              onCardClick={handleCardClick}
              onNewEntryClick={openNewEntry}
            />
          );
        }
        return;
      case -2:
        if (position === 1) {
          console.log("open NewEntry");
          return <NewEntry onCloseClick={closeBigCard} />;
        }
        return;

      default:
        if (position === 1) {
          console.log("open BigCard");
          return <BigCard cardId={selectedCard} onCloseClick={closeBigCard}/>;
        }
    }
  };

  return (
    <>
      {getView(1)}
      <Header />
      {getView(2)}
      <Footer />
    </>
  );
}

export default App;
