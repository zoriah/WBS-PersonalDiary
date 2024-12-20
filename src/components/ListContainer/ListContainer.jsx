import { useState } from "react";
import Smallcards from "../SmallCard/SmallCard.jsx";
import { getAll } from "../../helper/localStorageHelper.js";
import "./ListContainer.css";

export default function ListContainer({ onCardClick, onNewEntryClick }) {
  function handleOpenEntryClick() {
    onNewEntryClick();
  }

  return (
    <main id="content-container">
      <div>
        <div id="control-row">
          <button onClick={handleOpenEntryClick}>Add new Entry</button>
        </div>
        <div id="list-container">
          {getAll().map((value, index) => {
            return (
              <Smallcards
                key={`card_${index}`}
                index={index}
                cardData={value}
                id={value.saveDate}
                onCardClick={onCardClick}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
