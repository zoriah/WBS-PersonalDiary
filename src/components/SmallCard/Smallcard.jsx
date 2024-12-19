import "./Smallcard.css";

export const Smallcard = ({ index, entry }) => {
  console.log(index);

  return (
    <div id="small-card">
      <div id="card-title">{entry.title}</div>
      <div id="card-date">{entry.date.toLocaleString("de-DE")}</div>
    </div>
  );
};

export default Smallcard;
