// Required
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-none flex justify-center items-center flex-col h-[calc(100vh-(5.3rem+12rem))]">
      <h1 className="text-primaryOrange text-9xl font-extrabold">404</h1>
      <span className="text-primaryOrange">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link to="/" className="text-primaryOrange py-20">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}
