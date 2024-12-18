import "./bigCard.css";
function Bigcard() {
  const modalContainer = document.getElementById("modal-container");
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            amet quae non! Sapiente obcaecati, maxime saepe tempora quam
            perspiciatis officia adipisci? Facere modi illo exercitationem
            ducimus unde itaque labore veniam, ullam quae quam voluptatem ipsum
            mollitia culpa neque, quibusdam tempore nemo quidem sunt ipsa vel
            consequatur libero illum. Eaque provident temporibus, vero iusto
            eius sapiente doloremque animi aperiam labore ipsam fuga minima
            nesciunt rerum vitae corporis. Itaque voluptatum nemo ex harum neque
            exercitationem commodi ullam, natus nihil assumenda accusamus
            mollitia eos? Iusto omnis qui fuga modi odio, recusandae nostrum
            libero atque error repellat neque eligendi, nobis provident
            aspernatur doloribus molestiae?
          </p>
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
