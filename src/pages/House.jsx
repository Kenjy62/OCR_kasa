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
    <div className="p-5 container-none flex flex-col gap-10">
      <Slider data={index} />

      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col">
          <span className="block text-primaryOrange text-xl">
            {index.title}
          </span>
          <span className="block text-primaryOrange text-md">
            {index.location}
          </span>
          <div className="flex flex-row gap-3 flex-wrap my-4">
            {index.tags.map((item, key) => {
              return <Tag key={key}>{item}</Tag>;
            })}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center md:flex-col-reverse md:justify-end gap-4">
          <Stars rating={parseInt(index.rating)} />
          <div className="infos flex flex-row-reverse justify-end items-center gap-2">
            <img
              src={index.host.picture}
              alt={index.title}
              className="rounded-full h-10 w-10"
            />
            <span className="text-primaryOrange text-lg">
              {index.host.name}
            </span>
          </div>
        </div>
      </div>

      <div className="container-none flex flex-col gap-5 lg:flex-row xl:flex-row">
        <Dropdown data={index.description}>Description</Dropdown>
        <Dropdown data={index.equipments}>Equipements</Dropdown>
      </div>
    </div>
  );
}
