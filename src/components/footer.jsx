import Logo from "../logo-footer.png";

export default function footer() {
  return (
    <footer className="bg-black h-48 flex flex-col gap-5 justify-center items-center">
      <img src={Logo} className="img-footer" />
      <span className="text-white text-lg">
        &copy; 2020 Kasa, All Rights Reserved
      </span>
    </footer>
  );
}
