// Required
import { Link } from "react-router-dom";

export default function Thumb({ item }) {
  return (
    <Link to={`/house/${item.id}`}>
      <div className="thumb" style={{ backgroundImage: `url(${item.cover})` }}>
        <div className="thumb--gradient">
          <span>{item.title}</span>
        </div>
      </div>
    </Link>
  );
}
