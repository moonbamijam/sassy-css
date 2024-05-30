import { navLinks } from "../../lib/navLinks";
import headerStyles from "./header.module.scss";

const Header = () => {
  return (
    <>
      <div className={`${headerStyles.header_bg}`}></div>
      <header className={`container ${headerStyles.header}`}>
        <a href="/" className={`${headerStyles.title}`}>
          <h2>Sassy CSS</h2>
        </a>
        <nav className={`${headerStyles.nav}`}>
          {navLinks.map((navLink, id) => (
            <a key={id} href={navLink.href} className={`${headerStyles.a}`}>
              {navLink.name}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
};

export default Header;
