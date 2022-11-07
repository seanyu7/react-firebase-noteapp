import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input type="text" placeholder="Note Title" />
        <textarea id="" placeholder="put in content of the note" />
      </div>
      <div className="app-main-note-preview">
        <h1 className="preview-title">Title</h1>
        <div className="markdown-preview">content of the note</div>
      </div>
    </div>
  );
}

export default Main;
