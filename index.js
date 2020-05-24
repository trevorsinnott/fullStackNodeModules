require("dotenv").config();
var morgan = require("morgan");
const cors = require("cors");
const express = require("express");
var Person = require("./models/person.js");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

morgan.token("sent", function (req, res) {
  return JSON.stringify(req.body);
});

app.use(
  morgan(function (tokens, req, res) {
    return [
      tokens.method(req, res),
      tokens.url(req, res),
      tokens.status(req, res),
      tokens.res(req, res, "content-length"),
      "-",
      tokens["response-time"](req, res),
      "ms",
      tokens.sent(req, res),
    ].join(" ");
  })
);

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abromav",
    number: "12-43-234345",
    id: 3,
  },
];

const generateId = () => {
  return `_${Math.random().toString(36).substr(2, 9)}`;
};

app.get("/api/persons", (req, res) => {
  Person.find({}).then((people) => {
    res.json(people);
  });
});

app.get("/info", (req, res) => {
  res.send(
    `<div>Phonebook has info for ${
      persons.length
    } people</div><div>${Date()}</div>`
  );
});

app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);

  res.status(204).end();
});

app.post("/api/persons", (req, res) => {
  const body = req.body;

  if (!body.name) {
    return res.status(404).json({ error: "name missing" });
  } else if (!body.number) {
    return res.status(404).json({ error: "number missing" });
  } else if (
    persons.some(
      (person) => person.name.toLowerCase() === body.name.toLowerCase()
    )
  ) {
    return res.status(404).json({ error: `${body.name} already in phonebook` });
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  });

  person.save().then((savedPerson) => {
    res.json(savedPerson);
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
