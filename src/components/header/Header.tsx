import { Menu } from "lucide-react";
import { navLinks } from "../../lib/navLinks";
import Styles from "./header.module.scss";
import { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState(true);

  const toggleDropdown = () => {
    setDropdown(!dropdown)
  }

  return (
    <>
      <div className={`${Styles.header_bg}`}></div>
      <header className={`container ${Styles.header}`}>
        <a href="/" className={`${Styles.title}`}>
          <h2>Sassy CSS</h2>
        </a>

        <button className={`btn ${Styles.btn}`} onClick={toggleDropdown}>
          <Menu />
          {dropdown && (
            <nav className={`${Styles.nav}`}>
              {navLinks.map((navLink, id) => (
                <a key={id} href={navLink.href} className={`${Styles.a}`}>
                  {navLink.name}
                </a>
              ))}
            </nav>
          )}
        </button>
      </header>
    </>
  );
};

export default Header;
