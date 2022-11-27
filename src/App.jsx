import "./App.css";
import Main from "./components/Main";
import Sideber from "./components/Sideber";
import { useState } from "react";
import uuid from "react-uuid";
import { useEffect } from "react";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージに保存する。
    //ローカルストレージに保存することによって、ブラウザを閉じてもデータが消えない環境の構築が可能となる。
    localStorage.setItem("notes", JSON.stringify(notes));
    //上記の記入方法にて、ローカルストレージに保存することができる。
    //JSON.stringify(notes)にて、notesの中身を文字列に変換している。そのためローカルストレージにて文字列として見ることができる。
  }, [notes]);

  
  //上記記入をすることによって、最初に表示されるノートを設定することができる。

  const onAddNote = () => {
    console.log("add note");
    const newNote = {
      id: uuid(),
      title: "New Note",
      content:
        "learning react from the beginning and building a app from scratch",
      modDate: Date.now(),
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

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返すような動きをしてくれる配列を作る。
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      } else {
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
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default App;
