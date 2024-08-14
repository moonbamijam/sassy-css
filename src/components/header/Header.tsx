import { navLinks } from "../../lib/navLinks";
import Styles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={`${Styles.header_bg}`}></div>
      <header className={`container ${Styles.header}`}>
        <a href="/" className={`${Styles.title}`}>
          <h2>Sassy CSS</h2>
        </a>
        <nav className={`${Styles.nav}`}>
          {navLinks.map((navLink, id) => (
            <a key={id} href={navLink.href} className={`${Styles.a}`}>
              {navLink.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
