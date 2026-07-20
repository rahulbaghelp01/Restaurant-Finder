import { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [openOrClose, setOpenOrClose] = useState(false);

  const handleClick = () => setOpenOrClose(!openOrClose);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <button onClick={handleClick} aria-label="Toggle sidebar">☰</button>
        <h2>DishDash</h2>
      </div>
      { openOrClose ?
      <div className="sidebar-drawer">
        <Link to="/Favourites">Favourites</Link>
        <h3>Comments</h3>
        <h3>Settings</h3>
        <h3>Log Out</h3>
      </div> : ""
      }
    </div>
  );
}

