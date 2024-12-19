import Smallcards from "../SmallCards/Smallcards.jsx";
import entries from "../../helper/entry.js";
import "./ListContainer.css";

export default function Listcontainer() {
  const arrEntries = entries();
  return (
    <div id="list-container">
      <div id="control">
        <button>Add new Entry</button>
      </div>
      <div id="entry-list">
        {arrEntries.map((entry, index) => {
          return (
            <Smallcards key={` card_${index}`} index={index} entry={entry} />
          );
        })}
      </div>
    </div>
  );
}
