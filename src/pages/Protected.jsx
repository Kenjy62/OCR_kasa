// Required
import { useParams } from "react-router-dom";

import NotFound from "./404";
// JSON Data
import data from "../data/logements.json";

export default function Protected({ children }) {
  let { id } = useParams();
  let index = data.logement.find((item) => item.id === id);
  if (index) {
    return children;
  } else {
    return <NotFound />;
  }
}
