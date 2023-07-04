import React, { useState } from "react";
import "./HamburgerMenu.css";

const HamburgerMenu = ({ menuItems, onMenuItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (menuItem) => {
    onMenuItemClick(menuItem);
    setIsOpen(false);
  };

  const renderMenuItems = (items) => {
    return items.map((menuItem) => {
      const hasChildren = menuItem.Children && menuItem.Children.length > 0;

      return (
        <li key={menuItem.Id}>
          <span onClick={() => handleClick(menuItem)}>{menuItem.Name}</span>
          {hasChildren && (
            <ul className="submenu">
              {renderMenuItems(menuItem.Children)}
            </ul>
          )}
        </li>
      );
    });
  };

  return (
    <>
      <div
        className="hamburger-icon"
        onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
      >
        ☰
      </div>
      {isOpen && (
        <div className={`hamburger-menu${isOpen ? " open" : ""}`}>
          <ul>{renderMenuItems(menuItems)}</ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;