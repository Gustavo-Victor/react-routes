import { useState } from "react";
import CustomLink from "./CustomLink";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(false);

  const handleClick = () => {
    setActiveMenu((prevState) => !prevState);
  };

  const navClasses = activeMenu ? "nav active" : "nav";

  return (
    <nav className={navClasses}>
      <CustomLink id="nav-logo" href="/">
        Front Beginners
      </CustomLink>
      <ul>
        <li>
          <CustomLink handleClick={handleClick} href="/">
            Home
          </CustomLink>
        </li>
        <li>
          <CustomLink handleClick={handleClick} href="/about">
            About
          </CustomLink>
        </li>
        <li>
          <CustomLink handleClick={handleClick} href="/contact">
            Contact
          </CustomLink>
        </li>
        <li>
          <CustomLink handleClick={handleClick} href="/profile">
            Profile
          </CustomLink>
        </li>
      </ul>

      {activeMenu ? (
        <FaTimes onClick={handleClick} />
      ) : (
        <FaBars onClick={handleClick} />
      )}
    </nav>
  );
}
