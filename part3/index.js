console.log("hello world 1");

// const http = require('http');

//using express:
const express = require("express");
const app = express();

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true,
  },
];

app.get("/", (request, response) => {
  response.send("<h1>hellow world</h1>");
});
app.get("/api/notes/:id", (request, response) => {
  const id = Number(request.params.id);
  // console.log(id);

  const note = notes.find((note) => {
    // console.log(note.id, typeof note.id, id, typeof id, note.id === id);
    return note.id === id;
  });
  // console.log(note);
  if (note) {
    response.json(note);
  } else {
    response.status(404).send("index not avaliable").end();
  }
});

// setting up server required through http
// const app = http.createServer((request, response) => {
//   response.writeHead(200, { 'Content-Type': 'application/json' })
//   response.end(JSON.stringify(notes))
// })

const PORT = 3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);
