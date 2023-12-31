import { useState } from "react";
import { Route, Routes, useMatch, useNavigate } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Anecdote } from "./components/Anecdote";
import { AnecdoteList } from "./components/AnecdoteList";
import { CreateNew } from "./components/CreateNew";
import { About } from "./components/About";
import { Footer } from "./components/Footer";

const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: "If it hurts, do it more often",
      author: "Jez Humble",
      info: "https://martinfowler.com/bliki/FrequencyReducesDifficulty.html",
      votes: 0,
      id: 1,
    },
    {
      content: "Premature optimization is the root of all evil",
      author: "Donald Knuth",
      info: "http://wiki.c2.com/?PrematureOptimization",
      votes: 0,
      id: 2,
    },
  ]);
  const navigate = useNavigate();
  const match = useMatch("/anecdotes/:id");
  const anecdote = match
    ? anecdotes.find((val) => val.id == match.params.id)
    : null;

  const [notification, setNotification] = useState("");

  const displayNotification = (anecdote) => {
    setNotification(`a new anecdote "${anecdote}" created!`);
    setTimeout(() => {
      setNotification("");
    }, 5000);
  };

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000);
    setAnecdotes(anecdotes.concat(anecdote));
    displayNotification(anecdote.content);
    navigate("/");
  };

  const anecdoteById = (id) => anecdotes.find((a) => a.id === id);

  const vote = (id) => {
    const anecdote = anecdoteById(id);

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1,
    };
    //setting anecdote with mapping.
    setAnecdotes(anecdotes.map((a) => (a.id === id ? voted : a)));
  };

  return (
    <div>
      <h1>Software anecdotes</h1>
      <Menu />
      {notification ? <div>{notification}</div> : null}
      <Routes>
        <Route path="/" element={<AnecdoteList anecdotes={anecdotes} />} />
        <Route
          path="/anecdotes/:id"
          element={<Anecdote anecdote={anecdote} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/create" element={<CreateNew addNew={addNew} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
