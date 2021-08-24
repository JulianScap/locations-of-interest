import ILocation from "../types/ILocation";
import ISearch from "../types/ISearch";
import Constants from "./Constants";

function filterByText(location: ILocation, text: string) {
  if (!text) {
    return true;
  }
  return location.search.indexOf(text) !== -1;
}

function filterBySuburb(location: ILocation, suburb: string) {
  if (!suburb) {
    return true;
  }
  if (!location.suburb) {
    return false;
  }
  return location.suburb.toLocaleLowerCase(Constants.locale) === suburb;
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

function prepare(search: ISearch): ISearch {
  const result: ISearch = {
    text: search.text,
    suburb: search.suburb,
    updatedFrom: search.updatedFrom ? new Date(search.updatedFrom) : undefined,
    updatedTo: search.updatedTo ? new Date(search.updatedTo) : undefined,
    dayTo: search.dayTo ? new Date(search.dayTo) : undefined,
    dayFrom: search.dayFrom ? new Date(search.dayFrom) : undefined,
  };

  result.text = result.text.toLocaleLowerCase(Constants.locale);
  result.suburb = result.suburb.toLocaleLowerCase(Constants.locale);

  if (result.updatedFrom) {
    result.updatedTo = new Date(result.updatedFrom);
    result.updatedTo.setDate(result.updatedTo.getDate() + 1);
    result.updatedTo.setMinutes(result.updatedTo.getMinutes() - 1);
  }

  if (result.dayTo) {
    result.dayTo.setDate(result.dayTo.getDate() + 1);
    result.dayTo.setMinutes(result.dayTo.getMinutes() - 1);
  }

  return result;
}

function filterList(
  locationsOfInterest: ILocation[],
  search: ISearch
): ILocation[] {
  if (!search) {
    return locationsOfInterest;
  }

  const clonedSearch = prepare(search);

  return locationsOfInterest.filter(
    (location) =>
      filterByText(location, clonedSearch.text) &&
      filterBySuburb(location, clonedSearch.suburb) &&
      filterByDate(
        location.updated,
        clonedSearch.updatedFrom,
        clonedSearch.updatedTo
      ) &&
      filterByDate(location.day, clonedSearch.dayFrom, clonedSearch.dayTo)
  );
}

const Filter = {
  locations: filterList,
};

export default Filter;
