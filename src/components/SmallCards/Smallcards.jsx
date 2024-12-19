import { getAll } from "../../helper/localStorageHelper";
import "./smallcards.css";
import { useEffect } from "react";

export default function Smallcards({ handleSCClick, setTempId, onSendData }) {
  const smallCards = getAll();

  useEffect(() => {}, []);

  return (
    <div id="modal-container">
      {smallCards.map((card, index) => {
        return (
          <div
            onClick={() => onSendData(card.saveDate)} //onSendData
            key={index}
            savedate={card.saveDate}
            id="card"
          >
            <div id="card-title">{card.title}</div>
            <div id="card-date">
              {card.saveDate.toLocaleString("de-DE", {
                dateStyle: "long",
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
