// Required
import { Link } from "react-router-dom";

// Assets
import Logo from "../logo.png";

export default function header() {
  return (
    <header className="flex justify-between items-center p-5">
      <Link to="/">
        <img className="custom-logo" src={Logo} alt="Kasa Home"></img>
      </Link>
      <nav>
        <ul className="list-none flex flex-row gap-4">
          <Link to="/">
            <li className="inline-block text-primaryOrange text-xl hover:border-b border-primaryOrange cursor-pointer">
              Accueil
            </li>
          </Link>
          <Link to="/about">
            <li className="inline-block text-primaryOrange text-xl hover:border-b border-primaryOrange cursor-pointer">
              A Propos
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
