import { useState } from "react";
import "./Newentry.css";

// http://www.example.com

export default function Newentry() {
  const [values, setValues] = useState({
    // title: "Tag der Erneuerung",
    // date: 1734048000000,
    // img_url: "http://www.example.com",
    // content: "Auch im nächsten Jahr sind Steuern Raub.",
    title: "",
    date: 0,
    img_url: "",
    content: "",

    getDate: function () {
      const temp = new Date(this.date);
      const year = temp.getFullYear();
      const month = (temp.getMonth() + 1).toString().padStart(2, "0");
      const day = temp.getDate().toString().padStart(2, "0");
      console.log(`${year}-${month}-${day}`);
      return `${year}-${month}-${day}`;
    },

    exportValues: function () {
      const title = this.title;
      const date = this.date;
      const img_url = this.img_url;
      const content = this.content;
      const values = {
        title: title,
        date: date,
        img_url: img_url,
        content: content,
      };

      return values;
    },
  });

  const handleChange = (e) => {
    setValues((current) => ({
      ...current,
      [e.target.name]:
        e.target.name === "date"
          ? new Date(e.target.value).getTime()
          : e.target.value,
    }));
    console.log("Values:", values);
    console.log("Export-Value:", values.exportValues());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div id="NewEntry-Container" className="font-sour">
        <form action="" onSubmit={handleSubmit}>
          <h2>New Entry</h2>

          <p>
            <label htmlFor="title">Titel</label>
            <input
              name="title"
              id="title"
              type="text"
              placeholder="Title"
              value={values.title}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="date">Date</label>
            <input
              name="date"
              id="date"
              type="date"
              placeholder="Date"
              value={values.getDate()}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="img_url">Image-URL</label>
            <input
              name="img_url"
              id="img_url"
              type="url"
              placeholder="Image URL"
              value={values.img_url}
              onChange={handleChange}
              required
            />
          </p>

          <p>
            <label htmlFor="content">Content</label>
            <textarea
              name="content"
              id="content"
              placeholder="Type here your text"
              cols="10"
              rows="5"
              value={values.content}
              onChange={handleChange}
              required
            ></textarea>
          </p>

          <p>
            <button className="button" type="submit">
              Add Entry
            </button>
          </p>
        </form>
      </div>
    </>
  );
}
