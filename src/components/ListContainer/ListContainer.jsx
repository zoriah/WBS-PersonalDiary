import Smallcards from "../SmallCards/Smallcards.jsx";
import "./ListContainer.css";
import { getById, getAll } from "../../helper/localStorageHelper";
import { useState } from "react";
export default function Listcontainer({ setTempId }) {
  const entries = getAll();

  const [id, setId] = useState(-1);
  console.log(id);

  // Callback
  const handleData = (id) => {
    setId(id);
  };

  const handleSCClick = (e) => {
    e.preventDefault();
    console.log(e.target.saveDate);
  };

  // useEffect(() => {
  //   return () => {};
  // }, []);

  return (
    <div id="list-container">
      <div id="control">
        <button>Add new Entry</button>
      </div>
      <div id="entry-list">
        {entries.map((entry, index) => {
          return (
            <Smallcards
              onSendData={handleData} //handleData wird zu onSendData
              setTempId={setTempId}
              handleSCClick={handleSCClick}
              key={` card_${index}`}
              index={index}
              entry={entry}
            />
          );
        })}
      </div>
    </div>
  );
}
