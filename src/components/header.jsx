import Logo from "../logo.png";

export default function header() {
  return (
    <header className="flex justify-between items-center p-5">
      <img className="custom-logo" src={Logo}></img>
      <nav>
        <ul className="list-none flex flex-row gap-4">
          <li className="inline-block text-primaryOrange text-xl">Accueil</li>
          <li className="inline-block text-primaryOrange text-xl">A Propos</li>
        </ul>
      </nav>
    </header>
  );
}
