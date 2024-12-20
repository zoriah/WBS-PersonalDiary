const storageKey = "entries";

export const localHelper = () => {
  localStorage.setItem(
    storageKey,
    JSON.stringify([
      {
        // id: 1,
        title: "card1",
        entryDate: new Date("February 7, 2010"),
        saveDate: 1,
        imgUrl: "https://picsum.photos/800/600",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolorem.",
      },
      {
        // id: 2,
        title: "card2",
        entryDate: new Date("February 8, 2010"),
        saveDate: 2,
        imgUrl: "https://picsum.photos/800/600",
        message:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum labore explicabo alias!",
      },
      {
        // id: 3,
        title: "card3",
        entryDate: new Date("February 9, 2010"),
        saveDate: 3,
        imgUrl: "https://picsum.photos/800/600",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio maiores expedita sapiente iste minima officiis tenetur reprehenderit a ad!",
      },
      {
        // id: 4,
        title: "card4",
        entryDate: new Date("February 10, 2010"),
        saveDate: 4,
        imgUrl: "https://picsum.photos/800/600",
        message:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores ducimus quos, voluptate dolor cupiditate?",
      },
      {
        // id: 5,
        title: "card5",
        entryDate: new Date("February 11, 2010"),
        saveDate: 5,
        imgUrl: "https://picsum.photos/800/600",
        message:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, eveniet fugit? Modi beatae ea, ducimus fugit exercitationem nulla inventore incidunt libero qui! Veniam, dolorum rerum.",
      },
      {
        // id: 6,
        title: "card6",
        entryDate: new Date("February 12, 2010"),
        saveDate: 6,
        imgUrl: "https://picsum.photos/800/600",
        message: "Steuern sind Raub!",
      },
      {
        // id: 7,
        title: "card7",
        entryDate: new Date("February 13, 2010"),
        saveDate: 7,
        imgUrl: "https://picsum.photos/800/600",
        message: "Hi guys, i like Döner Kebab! Kiss :)",
      },
    ])
  );
};

export function getAll() {
  let temp = JSON.parse(localStorage.getItem(storageKey));
  return temp ? temp : false;
}

export function getById(id) {
  let temp = getAll();

  if (temp === false) {
    return false;
  }

  return temp.map((entry) => {
    if (entry.id === id) {
      return entry;
    }
  });
}

export function setNewEntry(title, entrydate, imgUrl, message) {
  let temp = getAll();

  let newEntry = {
    title: title,
    entryDate: entrydate,
    saveDate: Date.now(),
    imgUrl: imgUrl,
    message: message,
  };
  if (temp === false) {
    localStorage.setItem(JSON.stringify({ newEntry }));
    return;
  }
  localStorage.setItem(storageKey, JSON.stringify([...temp, newEntry]));
}
