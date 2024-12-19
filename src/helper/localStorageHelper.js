export const localHelper = () => {
    localStorage.setItem(
        "entries",
        JSON.stringify([
            {
                // id: 1,
                title: "card1",
                entrieDate: new Date("February 7, 2010"),
                saveDate: 1,
                imdUrl: "https://picsum.photos/800/600",
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolorem.",
            },
            {
                // id: 2,
                title: "card2",
                entrieDate: new Date("February 8, 2010"),
                saveDate: 2,
                message:
                    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum labore explicabo alias!",
            },
            {
                // id: 3,
                title: "card3",
                entrieDate: new Date("February 9, 2010"),
                saveDate: 3,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem distinctio maiores expedita sapiente iste minima officiis tenetur reprehenderit a ad!",
            },
            {
                // id: 4,
                title: "card4",
                entrieDate: new Date("February 10, 2010"),
                saveDate: 4,
                message:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores ducimus quos, voluptate dolor cupiditate?",
            },
            {
                // id: 5,
                title: "card5",
                entrieDate: new Date("February 11, 2010"),
                saveDate: 5,
                message:
                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus, eveniet fugit? Modi beatae ea, ducimus fugit exercitationem nulla inventore incidunt libero qui! Veniam, dolorum rerum.",
            },
            {
                // id: 6,
                title: "card6",
                entrieDate: new Date("February 12, 2010"),
                saveDate: 6,
                message: null,
            },
            {
                // id: 7,
                title: "card7",
                entrieDate: new Date("February 13, 2010"),
                saveDate: 7,
                message: "Hi guys, i like Döner Kebab! Kiss :)",
            },
        ])
    );
}
// export const getAll = (entries) => {
//     return entries
// }

// export const getCardById = (id) => {
//     return id
// }

// export const setNewEntry = (newEntrie) => {
//     return newEntrie
// }

export function getAll() {
    let temp = JSON.parse(localStorage.getItem("entries"));
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
    let newId = temp.length();

    let newEntry = {
        id: newId,
        title: title,
        entrydate: entrydate,
        saveDate: Date.now(),
        imgUrl: imgUrl,
        message: message,
    };
    if (temp === false) {
        localStorage.setItem(JSON.stringify({ newEntry }))
        return
    }
    localStorage.setItem(JSON.stringify([...temp, newEntry]));
}


// let entries = JSON.parse(localStorage.getItem("entries"));
// for (let i = 0; i <= 6; i++) console.log(entries[i]);
