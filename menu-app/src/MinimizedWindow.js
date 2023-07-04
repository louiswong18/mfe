import React from "react";
import "./MinimizedWindow.css";

const MinimizedWindow = ({ menuItem, onExpand, onClose }) => {
  return (
    <div className="minimized-window">
      <span>{menuItem.Name}</span>
      <button onClick={onExpand}>+</button>
      <button onClick={onClose}>x</button>
    </div>
  );
};

export default MinimizedWindow;