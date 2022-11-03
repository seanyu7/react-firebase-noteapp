import React from "react";
import "./Sideber.css";

function Sideber() {
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>note</h1>
        <button>add</button>
      </div>
        <div className="app-sidebar-notes">
          <div className="app-sidebar-note">
            <div className="sidebar-note-title">
              <strong>title</strong>
              </div>
              <button>delete</button>
              <p>content of this note</p>
              <small>The last edited date : xx/xx</small>
            </div>
          
        </div>
      
    </div>
  );
}

export default Sideber;
