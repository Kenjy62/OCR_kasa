// Required
import { Link } from "react-router-dom";

// Assets
import Logo from "../logo.png";

export default function header() {
  return (
    <header>
      <Link to="/">
        <img className="custom-logo" src={Logo} alt="Kasa Home"></img>
      </Link>
      <nav>
        <ul>
          <Link to="/">
            <li>Accueil</li>
          </Link>
          <Link to="/about">
            <li>A Propos</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
