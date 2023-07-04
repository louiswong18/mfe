import React from "react";
import "./MinimizedFooter.css";

const MinimizedFooter = ({ minimizedMenuItems, onRestore }) => {
  return (
    <div className="minimized-footer">
      {minimizedMenuItems.map((menuItem) => (
        <div
          key={menuItem.Id}
          className="minimized-item"
          onClick={() => onRestore(menuItem)}
        >
          {menuItem.Name}
        </div>
      ))}
    </div>
  );
};

export default MinimizedFooter;