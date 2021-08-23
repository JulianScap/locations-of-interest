import ILocation from "../types/ILocation";
import ISearch from "../types/ISearch";
import Constants from "./Constants";

function filterByText(location: ILocation, text: string) {
  if (!text) {
    return true;
  }
  return location.search.indexOf(text) !== -1;
}

function filterByDate(date: Date, from?: Date, to?: Date) {
  if (from && to) {
    return date >= from && date < to;
  }

  if (from) {
    return date >= from;
  }

  if (to) {
    return date < to;
  }

  return true;
}

function prepare(search: ISearch) {
  search.text = search.text.toLocaleLowerCase(Constants.locale);

  if (search.updatedFrom) {
    search.updatedTo = new Date(search.updatedFrom);
    search.updatedTo.setDate(search.updatedTo.getDate() + 1);
    search.updatedTo.setMinutes(search.updatedTo.getMinutes() - 1);
  }

  if (search.dayTo) {
    search.dayTo.setDate(search.dayTo.getDate() + 1);
    search.dayTo.setMinutes(search.dayTo.getMinutes() - 1);
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
      filterByDate(location.updated, search.updatedFrom, search.updatedTo) &&
      filterByDate(location.day, search.dayFrom, search.dayTo)
  );
}

const Filter = {
  locations: filterList,
};

export default Filter;
