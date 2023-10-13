import "../styles/pages/Error.sass";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <main id="Error">
        <p id="number">404</p>
        <Link to={"/"} id="gohome">
          Вернуться на главную страницу
        </Link>
      </main>
    </>
  );
};

export default Error;
