import { Link } from "react-router-dom";

export default function Thumb({ item }) {
  return (
    <Link
      to={`/house/${item.id}`}
      className="rounded-lg w-full h-[250px] md:h-[300px] md:w-[calc(50%-10px)] lg:w-[calc(33%-11px)] xl:w-[calc(25%-15px)]"
    >
      <div
        className="bg-primaryOrange rounded-lg h-full w-full bg-cover"
        style={{ backgroundImage: `url(${item.cover})` }}
      >
        <div className="test-gradient rounded-lg w-full h-full flex flex-col align-bottom justify-end p-3">
          <span className="text-white">{item.title}</span>
        </div>
      </div>
    </Link>
  );
}
