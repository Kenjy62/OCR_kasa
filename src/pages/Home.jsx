// Components
import Illustration from "../components/illustration";
import Thumb from "../components/thumb";

// JSON Data
import data from "../data/logements.json";

export default function Home() {
  return (
    <>
      <div className="container-none p-5">
        <div className="container-none w-full">
          <Illustration type="bg-header h-[160px] lg:h-[220px] rounded-lg bg-cover bg-center">
            Chez vous, partout et ailleurs
          </Illustration>
        </div>
        <div className="container-none w-full my-5 bg-gray-100 rounded-lg flex gap-5 p-5 flex-wrap">
          {data.logement.map((item, key) => (
            <Thumb key={key} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
