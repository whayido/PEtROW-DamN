import { NavLink } from "react-router-dom";
import "../styles/componets/Header.sass";

const Header = () => {
  return (
    <>
      <header>
        <NavLink to={""} className="logo">
          Petrov Govno
        </NavLink>

        <nav>
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
      </header>
    </>
  );
};

export default Header;
