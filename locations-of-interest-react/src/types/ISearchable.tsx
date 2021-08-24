import ILocation from "./ILocation";
import ISearch from "./ISearch";

interface ISearchable {
  search: ISearch;
  locations: ILocation[];
}

export default ISearchable;
