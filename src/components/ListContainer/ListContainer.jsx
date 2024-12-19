import Smallcard from "../SmallCard/Smallcard.jsx";
import entries from "../../helper/entry.js";
import "./ListContainer.css";

export default function Listcontainer() {
  const arrEntries = entries();
  return (
    <div>
      <div id="entry-list">
        {arrEntries.map((entry, index) => {
          return (
            <Smallcard key={` card_${index}`} index={index} entry={entry} />
          );
        })}
      </div>
    </div>
  );
}
