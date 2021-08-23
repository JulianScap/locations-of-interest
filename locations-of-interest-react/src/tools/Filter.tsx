import ILocation from "../types/ILocation";
import ISearch from "../types/ISearch";
import Constants from "./Constants";

function filterByText(location: ILocation, text: string) {
  if (!text) {
    return true;
  }
  return location.search.indexOf(text) !== -1;
}

function filterByDate(
  location: ILocation,
  updatedFrom?: Date,
  updatedTo?: Date
) {
  if (!updatedFrom && !updatedTo) {
    return true;
  }

  if (updatedFrom && updatedTo) {
    return location.updated > updatedFrom && location.updated < updatedTo;
  }

  if (updatedFrom) {
    return location.updated > updatedFrom;
  }

  if (updatedTo) {
    return location.updated < updatedTo;
  }
}

function prepare(search: ISearch) {
  search.text = search.text.toLocaleLowerCase(Constants.locale);

  if (search.updatedFrom) {
    search.updatedTo = new Date(search.updatedFrom);
    search.updatedTo.setDate(search.updatedTo.getDate() + 1);
    search.updatedFrom.setMinutes(search.updatedFrom.getMinutes() - 1);
  }
}

function filterList(
  locationsOfInterest: ILocation[],
  search: ISearch
): ILocation[] {
  if (!search) {
    return locationsOfInterest;
  }

  prepare(search);

  return locationsOfInterest.filter(
    (location) =>
      filterByText(location, search.text) &&
      filterByDate(location, search.updatedFrom, search.updatedTo)
  );
}

const Filter = {
  locations: filterList,
};

export default Filter;
