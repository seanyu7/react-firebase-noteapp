import "./App.css";
import Main from "./components/Main";
import Sideber from "./components/Sideber";
import { useState } from "react";
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState(false);

  const onAddNote = () => {
    console.log("add note");
    const newNote = {
      id: uuid(),
      title: "New Note",
      content:
        "learning react from the beginning and building a app from scratch",
      lastModified: Date.now(),
    };
    setNotes([...notes, newNote]);
    console.log(notes);
  };

  const deleteNote = (id) => {
    console.log("delete note");
    setNotes(notes.filter((note) => note.id !== id));
  };

const getActiveNote = () => {
  return notes.find((note) => note.id === activeNote);
};

const onUpdateNote = (updatedNote) =>{
//修正された新しいノートの配列を返すような動きをしてくれる配列を作る。
const updatedNotesArray = notes.map((note) => {
  if (note.id === updatedNote.id) {
    return updatedNote;
} else{
  return note;
}
});

setNotes(updatedNotesArray);
};

  return (
    <div className="App">
      <Sideber
        onAddNote={onAddNote}
        notes={notes}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()}/>
    </div>
  );
}

export default App;
