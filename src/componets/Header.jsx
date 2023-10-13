import { NavLink } from "react-router-dom";
import "../styles/componets/Header.sass";

const Header = () => {
  return (
    <>
      <header>
        <section id="head">
          <nav>
            <NavLink to={""} className="logo">
              Govno
            </NavLink>

            <NavLink to={"/templates"} className="vvv">
              Начало
            </NavLink>

            <NavLink to={"/guide"} className="vvv">
              Инструкция
            </NavLink>

            <NavLink to={"/creator"} className="vvv">
              Авторы
            </NavLink>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
