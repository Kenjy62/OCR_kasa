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
    <div className="house--container">
      <Slider data={index} />

      <div className="house--container--infos">
        <div className="house--container--infos--logement">
          <span>{index.title}</span>
          <span>{index.location}</span>
          <div className="house--container--infos--logement--tags">
            {index.tags.map((item, key) => {
              return <Tag key={key}>{item}</Tag>;
            })}
          </div>
        </div>
        <div className="house--container--infos--logement--user">
          <Stars rating={parseInt(index.rating)} />
          <div className="house--container--infos--logement--user--infos">
            <img src={index.host.picture} alt={index.title} />
            <span>{index.host.name}</span>
          </div>
        </div>
      </div>

      <div className="dropdown--container">
        <Dropdown data={index.description}>Description</Dropdown>
        <Dropdown data={index.equipments}>Equipements</Dropdown>
      </div>
    </div>
  );
}
