// Assets
import Logo from "../logo-footer.png";

export default function footer() {
  return (
    <footer>
      <img src={Logo} className="img-footer" alt="Kasa Logo" />
      <span>&copy; 2020 Kasa, All Rights Reserved</span>
    </footer>
  );
}
