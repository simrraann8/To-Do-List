import React, { useState } from "react";
import "./mystyles.css";

function InputTask() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTaskList([...taskList, task.trim()]);
      setTask("");
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : ""}`}>
      <div className="title-container">
        <h1 className="heading">My TO-DO List</h1>
        <img
          className="image"
          src="https://img.icons8.com/ios-filled/50/todo-list.png"
          alt="todo-list"
        />
        <button className="toggle-btn" onClick={handleDarkMode}>
          {darkMode ? "🌙" : "🌞"}
        </button>
      </div>
      <div className="container">
        <input
          className="inputTask"
          type="text"
          placeholder="Add Your Task"
          value={task}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTask} className="btn">
          <img
            className="addition"
            width="30"
            height="30"
            src="https://img.icons8.com/ios-glyphs/30/plus-math.png"
            alt="plus-math"
          />
        </button>
      </div>
      <div className="task-container">
        <div className="task">
          {taskList.length === 0 ? (
            <p>No tasks yet. Add one above!</p>
          ) : (
            <ul>
              {taskList.map((t, index) => (
                <li key={index}>{t}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default InputTask;
