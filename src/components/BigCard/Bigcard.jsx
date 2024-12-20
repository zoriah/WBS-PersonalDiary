import { useState } from "react";
import "./BigCard.css";

export default function BigCard({ cardId, onCloseClick }) {
  const [entries, setEntries] = useState(-1);

  const handleCloseClick = () => {
    onCloseClick();
    console.log("close BigCard");
  };

  console.log("BigCard: " + cardId);
  // console.log(entries);
  return (
    <main>
      <div id="bigCard">
        <div id="bigCard-control">
          <button id="btnClose" onClick={onCloseClick}>
            X
          </button>
        </div>

        <div id="bigCard-image">
          <img src="https://picsum.photos/800/600" alt="" />
        </div>

        <div id="bigCard-title">
          <h1>Test im Frühling{entries.title}</h1>
          <p id="bigCard-subtitle">20.12.2024{entries.actualDate}</p>
        </div>

        <div id="bigCard-message">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            magnam repudiandae eius labore! Officiis voluptatem consectetur,
            voluptatibus dolor placeat voluptates et amet eos, magni praesentium
            iste eaque doloribus tempore? Similique. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam magnam repudiandae eius labore!
            Officiis voluptatem consectetur, voluptatibus dolor placeat
            voluptates et amet eos, magni praesentium iste eaque doloribus
            tempore? Similique. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veniam magnam repudiandae eius labore! Officiis
            voluptatem consectetur, voluptatibus dolor placeat voluptates et
            amet eos, magni praesentium iste eaque doloribus tempore? Similique.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            magnam repudiandae eius labore! Officiis voluptatem consectetur,
            voluptatibus dolor placeat voluptates et amet eos, magni praesentium
            iste eaque doloribus tempore? Similique. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam magnam repudiandae eius labore!
            Officiis voluptatem consectetur, voluptatibus dolor placeat
            voluptates et amet eos, magni praesentium iste eaque doloribus
            tempore? Similique. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veniam magnam repudiandae eius labore! Officiis
            voluptatem consectetur, voluptatibus dolor placeat voluptates et
            amet eos, magni praesentium iste eaque doloribus tempore? Similique.
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
            magnam repudiandae eius labore! Officiis voluptatem consectetur,
            voluptatibus dolor placeat voluptates et amet eos, magni praesentium
            iste eaque doloribus tempore? Similique. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veniam magnam repudiandae eius labore!
            Officiis voluptatem consectetur, voluptatibus dolor placeat
            voluptates et amet eos, magni praesentium iste eaque doloribus
            tempore? Similique. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Veniam magnam repudiandae eius labore! Officiis
            voluptatem consectetur, voluptatibus dolor placeat voluptates et
            amet eos, magni praesentium iste eaque doloribus tempore? Similique.
            {entries.message}
          </p>
        </div>

        <div id="bigCard-footer">
          <button onClick={onCloseClick}>close</button>
        </div>
      </div>
    </main>
  );
}
