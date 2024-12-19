import { useState } from "react";
import "./bigCard.css";

function Bigcard({ entrieId }) {
  const [entries, setEntries] = useState(-1);
  console.log("Bigcard: " + entrieId);
  // console.log(entries);
  return (
    <div id="modal-container">
      <div className="overflow-hidden" id="modal">
        <div id="modal-header-outer">
          <img src="" alt="" />
          <div className="bg-[#ffffff]">
            <button id="btnClose">&times;</button>
          </div>
          <div id="modal-header">
            <h1 className="text-3xl font-bold">{entries.title}</h1>
            <p className="pt-2">{entries.actualDate}</p>
          </div>
        </div>
        <div id="modal-content">
          <p>{entries.message}</p>
        </div>
        <div id="modal-footer">
          {/* <button id="btn-sub">submit</button>
          <button id="btn-can">cancel</button> */}
        </div>
      </div>
    </div>
  );
}

export default Bigcard;
