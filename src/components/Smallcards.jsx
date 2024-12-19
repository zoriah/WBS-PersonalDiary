import "./smallCards.css";

function Smallcards() {
  const smallCards = [
    {
      title: "card1",
      date: new Date(),
      time: new Date(),
    },
    {
      title: "card2",
      date: new Date(),
    },
    {
      title: "card3",
      date: new Date(),
    },
    {
      title: "card4",
      date: new Date(),
    },
    {
      title: "card5",
      date: new Date(),
    },
    {
      title: "card6",
      date: new Date(),
    },
  ];

  return (
    <div id="modal-container">
      {smallCards.map((card, index) => {
        return (
          <div key={index} id="card">
            <div id="card-title">{card.title}</div>
            <div id="card-date">
              {card.date.toLocaleString("de-DE", { dateStyle: "long" })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Smallcards;
