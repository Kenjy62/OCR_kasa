// Required
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound--container">
      <h1>404</h1>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
