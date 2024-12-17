import React from "react";
import "./Reminder.css";
function Reminder() {
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input type="text" />
        <button>ADD</button>
      </div>
    </div>
  );
}

export default Reminder;
