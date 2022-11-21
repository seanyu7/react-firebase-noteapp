import React from "react";
import "./Sideber.css";

const Sideber = ({
  onAddNote,
  notes,
  deleteNote,
  activeNote,
  setActiveNote,
}) => {

const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate);
//この書き方をすることによって、今まで書いてきたノートを修正した際に過去のノートよりも上に上がってくるため、
//どのノートが最新のものなのかを簡単に判断できるようになる。


  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button onClick={onAddNote}>add</button>
      </div>
      <div className="app-sidebar-notes">
        {sortedNotes.map((note) => (
          <div
            className={`app-sidebar-note ${note.id === activeNote && "active"}`}
            key={note.id}
            onClick={() => setActiveNote(note.id)}
          >
            <div className="sidebar-note-title">
              <strong>{note.title}</strong>
            </div>
            <button onClick={() => deleteNote(note.id)}>delete</button>
            <p>{note.content}</p>
            <small>
              The last edited date :
              {new Date(note.modDate).toLocaleDateString("jp", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sideber;
