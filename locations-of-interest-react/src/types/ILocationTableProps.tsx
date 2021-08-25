import ILocation from "./ILocation";
import ISearch from "./ISearch";

interface ILocationTableProps {
  search: ISearch;
  locations: ILocation[];
  onCountChange: (newCount: number) => void;
}

export default ILocationTableProps;
