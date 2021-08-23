import ILocation from "../types/ILocation";
import Constants from "./Constants";

function filterOne(location: ILocation, search: string) {
  if (!search) {
    return true;
  }
  return location.search.indexOf(search) !== -1;
}

function filterList(
  locationsOfInterest: ILocation[],
  search: string
): ILocation[] {
  if (!search) {
    return locationsOfInterest;
  }

  search = search.toLocaleLowerCase(Constants.locale);

  return locationsOfInterest.filter((location) => filterOne(location, search));
}

const Filter = {
  locations: filterList,
};

export default Filter;
