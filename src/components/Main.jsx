import React from "react";
import "./Main.css";

const Main = ({ activeNote }) => {
  const onEditNote = () => {};

  if (!activeNote) {
    return <div className="no-active-note">No note selected</div>;
  }

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="title"
          placeholder="New Title"
          value={activeNote.title}
          onChange={(e) => onEditNote("title", e.target.value)}
        />
        <textarea
          id="content"
          placeholder="put in content of the note"
          value={activeNote.content}
          onChange={(e) => onEditNote("content", e.target.value)}
        />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <div className="markdown-preview">{activeNote.content}</div>
      </div>
    </div>
  );
};

export default Main;
