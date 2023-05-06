// Required
import { useParams } from "react-router-dom";

// Components
import Slider from "../components/slider";
import Tag from "../components/tag";
import data from "../data/logements.json";
import Stars from "../components/stars";
import Dropdown from "../components/dropdown";

export default function House() {
  // Get House ID
  let { id } = useParams();
  let index = data.logement.find((item) => item.id === id);

  return (
    <div className="p-5 container-none">
      <Slider data={index} />
      <span className="block my-2 text-primaryOrange text-2xl">
        {index.title}
      </span>
      <span className="block my-2 text-primaryOrange text-xl">
        {index.location}
      </span>
      <div className="flex flex-row gap-3 flex-wrap">
        {index.tags.map((item, key) => {
          return <Tag key={key}>{item}</Tag>;
        })}
      </div>
      <div className="container-none flex justify-between items-center my-6">
        <Stars rating={parseInt(index.rating)} />
        <div className="infos flex flex-row-reverse justify-center items-center gap-2">
          <img
            src={index.host.picture}
            alt={index.title}
            className="rounded-full h-10 w-10"
          />
          <span className="text-primaryOrange text-lg">{index.host.name}</span>
        </div>
      </div>
      <div className="container-none flex flex-col gap-5 lg:flex-row xl:flex-row">
        <Dropdown data={index.description}>Description</Dropdown>
        <Dropdown data={index.equipments}>Equipements</Dropdown>
      </div>
    </div>
  );
}
