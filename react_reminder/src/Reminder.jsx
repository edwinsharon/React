import React, { useState } from "react";
import "./Reminder.css";
import { use } from "react";
function Reminder() {
  const [Reminder, setReminder] = useState([]);
  const [newReminder, setnewReminder] = useState("");
  const handleInputChange = (event) => {
    setnewReminder(event.target.value);
  };
  const handleAddRemider = () => {
    if (newReminder.trim()) {
      setReminder([...Reminder, newReminder]);
      setnewReminder("");
    }
  };
  const handleDelete = (index) => {
    setReminder(Reminder.filter((item, itemIndex) => itemIndex !== index));
  };
  return (
    <div className="container">
      <h1>TODO LIST</h1>
      <div className="input-container">
        <input
          type="text"
          value={newReminder}
          placeholder="Enter Task"
          onChange={handleInputChange}
        />
        <button onClick={handleAddRemider}>ADD</button>
      </div>
      {Reminder.length > 0 ? (
        <ul className="reminder-list">
          {Reminder.map((reminder, index) => (
            <li key={index} className="reminder-item">
              <div>{reminder}</div>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No Task Found</p>
      )}
    </div>
  );
}

export default Reminder;
