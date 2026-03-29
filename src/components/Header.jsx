import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">

      {/* LOGO */}
      <div className="logo">
        <span>Salon<span className="highlight">Book</span></span>
      </div>

      {/* HAMBURGER */}
      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* NAV */}
      <nav className={`nav ${open ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>

      {/* BUTTON */}
      <button className="book-btn">Book Now</button>

    </header>
  );
};

export default Header;