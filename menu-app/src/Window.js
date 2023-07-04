import React from"react";
import "./WindowContainer.css";

const Window = ({ menuItem, onMinimize, onClose }) => {
  return (
    <div className="window-container">
      <div className="window-header">
        <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{menuItem.Name}</h3>
        <div class="window-header-buttons">
          <button onClick={onMinimize}>-</button>
          <button onClick={onClose}>x</button>
        </div>
      </div>
      <div className="window-content">
        <iframe
          src={menuItem.Url}
          title={menuItem.Name}
          width="100%"
          height="100%"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Window;