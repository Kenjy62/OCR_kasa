// Components
import Illustration from "../components/illustration";
import Thumb from "../components/thumb";

// JSON Data
import data from "../data/logements.json";

export default function Home() {
  return (
    <>
      <div className="main">
        <div className="illustration--container">
          <Illustration type="bg-header">
            Chez vous, partout et ailleurs
          </Illustration>
        </div>
        <div className="thumbs--container">
          {data.logement.map((item, key) => (
            <Thumb key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
