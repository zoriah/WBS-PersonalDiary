import "./bigCard.css";

localStorage.setItem(
  "entries",
  JSON.stringify([
    {
      title: "card1",
      entryDate: new Date("February 7, 2010"),
      actualDate: Date.now(),
      imdUrl: url("https://picsum.photos/800/600"),
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolorem.",
    },
    {
      title: "card2",
      entryDate: new Date("February 8, 2010"),
      actualDate: Date.now(),
      message:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum labore explicabo alias!",
    },
    {
      title: "card3",
      entryDate: new Date("February 9, 2010"),
      actualDate: Date.now(),
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio maiores expedita sapiente iste minima officiis tenetur reprehenderit a ad!",
    },
    {
      title: "card4",
      entryDate: new Date("February 10, 2010"),
      actualDate: Date.now(),
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores ducimus quos, voluptate dolor cupiditate?",
    },
    {
      title: "card5",
      entryDate: new Date("February 11, 2010"),
      actualDate: Date.now(),
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, eveniet fugit? Modi beatae ea, ducimus fugit exercitationem nulla inventore incidunt libero qui! Veniam, dolorum rerum.",
    },
    {
      title: "card6",
      entryDate: new Date("February 12, 2010"),
      actualDate: Date.now(),
      message: null,
    },
    {
      title: "card7",
      entryDate: new Date("February 13, 2010"),
      actualDate: Date.now(),
      message: "Hi guys, i like Döner Kebab! Kiss :)",
    },
  ])
);

let entries = JSON.parse(localStorage.getItem("entries"));
for (let i = 0; i <= 6; i++) console.log(entries[i]);

function Bigcard() {
  return (
    <div id="modal-container">
      <div className="overflow-hidden" id="modal">
        <div id="modal-header-outer">
          <div className="bg-[#ffffff]">
            <button id="btnClose">&times;</button>
          </div>
          <div id="modal-header">
            <h1 className="text-3xl font-bold">Title</h1>
            <p className="pt-2">{Date.now()}</p>
          </div>
        </div>
        <div id="modal-content">
          <p>{}</p>
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
