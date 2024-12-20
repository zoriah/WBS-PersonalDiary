import { useState } from "react";
import "./Newentry.css";
import { setNewEntry } from "../../helper/localStorageHelper";

// http://www.example.com

const saveEntry = (entry) => {
  setNewEntry(entry.tite, entry.entryDate, entry.imgUrl, entry.message);
};

export default function NewEntry({ onCloseClick }) {
  const [entry, setEntry] = useState({
    title: "",
    entryDate: "",
    saveDate: "",
    imgUrl: "",
    message: "",
  });

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setEntry((prevState) => ({ ...prevState, [name]: value }));
  };

  //   const handleChange = e => {
  //     const { name, value } = e.target;
  //     setState(prevState => ({
  //         ...prevState,
  //         [name]: value
  //     }));
  // };

  const handleCloseClick = () => {
    onCloseClick();
    console.log("close NewEntry");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveEntry(entry);
    onCloseClick();
  };

  return (
    <>
      <main id="mainNewEntry">
        <div id="newEntry-Container" className="font-sour">
          <form action="" onSubmit={handleSubmit}>
            <div id="control">
              <button type="button" id="btnClose" onClick={handleCloseClick}>
                X
              </button>
            </div>
            <h2>New Entry</h2>

            <p>
              <label htmlFor="title">Titel</label>
              <input
                name="title"
                id="title"
                type="text"
                placeholder="Title"
                value={entry.title}
                onChange={handleValueChange}
                required
              />
            </p>

            <p>
              <label htmlFor="entryDate">Date</label>
              <input
                name="entryDate"
                id="date"
                type="date"
                placeholder="Date"
                value={entry.entryDate}
                onChange={handleValueChange}
                required
              />
            </p>

            <p>
              <label htmlFor="imgUrl">Image-URL</label>
              <input
                name="imgUrl"
                id="imgUrl"
                type="url"
                placeholder="Image URL"
                value={entry.imgUrl}
                onChange={handleValueChange}
                required
              />
            </p>

            <p>
              <label htmlFor="message">Content</label>
              <textarea
                name="message"
                id="message"
                placeholder="Type here your text"
                cols="10"
                rows="5"
                value={entry.message}
                onChange={handleValueChange}
                required
              ></textarea>
            </p>

            <p>
              <button id="btnAddEntry" className="button" type="submit">
                Add Entry
              </button>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
