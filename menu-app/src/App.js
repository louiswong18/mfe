import React, { useState, useEffect } from "react";
import Window from "./Window";
import MinimizedFooter from "./MinimizedFooter";
import HamburgerMenu from "./HamburgerMenu";
import "./App.css";

const fetchMenuItems = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching menu items from ${url}:`, error);
    return [];
  }
};

const fetchAllMenuItems = async () => {
  const api1 = "http://localhost:3001/api/menu";
  const api2 = "http://localhost:51806/api/menu";

  const menuItems1 = await fetchMenuItems(api1);
  const menuItems2 = await fetchMenuItems(api2);

  return [...menuItems1, ...menuItems2];
};

const App = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const [minimizedMenuItems, setMinimizedMenuItems] = useState([]);

  useEffect(() => {
    fetchAllMenuItems().then((menuItems) => {
      setMenuItems(menuItems);
    });
  }, []);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const handleMinimize = () => {
    setMinimizedMenuItems([...minimizedMenuItems, activeMenuItem]);
    setActiveMenuItem(null);
  };

  const handleRestore = (menuItem) => {
    setActiveMenuItem(menuItem);
    setMinimizedMenuItems(
      minimizedMenuItems.filter((item) => item.Id !== menuItem.Id)
    );
  };

  const handleClose = () => {
    setActiveMenuItem(null);
  };

  return (
    <div className="App">
      <div className="hamburger-menu-container">
        <HamburgerMenu menuItems={menuItems} onMenuItemClick={handleMenuItemClick} />
      </div>
      {activeMenuItem && (
        <div className="window">
          <Window
            menuItem={activeMenuItem}
            onMinimize={handleMinimize}
            onClose={handleClose}
          />
        </div>
      )}
      <MinimizedFooter
        minimizedMenuItems={minimizedMenuItems}
        onRestore={handleRestore}
      />
    </div>
  );
};

export default App;