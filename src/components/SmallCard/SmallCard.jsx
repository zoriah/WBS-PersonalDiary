import { useEffect } from "react";
import "./SmallCard.css";

export default function Smallcards({ id, index, onCardClick, cardData }) {
  const handleClick = (e) => {
    console.log(e);
    onCardClick(id);
  };

  const getDateFormat = (value) => {
    value = new Date(value);
    return value.toLocaleString("de-DE", { dateStyle: "medium" });
  };

  return (
    <div key={"card_" + index} id="card" onClick={handleClick}>
      <div id="card-title">{cardData.title}</div>
      <div id="card-date">{getDateFormat(cardData.entrieDate)}</div>
    </div>
  );
}
