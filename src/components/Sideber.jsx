import React from "react";
import "./Sideber.css";

function Sideber({ onAddNote, notes, deleteNote, activeNote, setActiveNote }) {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button onClick={onAddNote}>add</button>
      </div>
      <div className="app-sidebar-notes">
        {notes.map((note) => (
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
            <small>The last edited date : xx/xx</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sideber;
