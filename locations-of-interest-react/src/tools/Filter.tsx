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

function filterByDate(date: number, from?: number, to?: number) {
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
    updatedFrom: search.updatedFrom ? search.updatedFrom : undefined,
    updatedTo: search.updatedTo ? search.updatedTo : undefined,
    dayTo: search.dayTo ? search.dayTo : undefined,
    dayFrom: search.dayFrom ? search.dayFrom : undefined,
  };

  result.text = result.text.toLocaleLowerCase(Constants.locale);
  result.suburb = result.suburb.toLocaleLowerCase(Constants.locale);

  if (result.updatedFrom) {
    let updatedTo: Date = new Date(result.updatedFrom);
    updatedTo.setDate(updatedTo.getDate() + 1);
    updatedTo.setMinutes(updatedTo.getMinutes() - 1);
    result.updatedTo = updatedTo.getTime();
  }

  if (result.dayTo) {
    let dayTo: Date = new Date(result.dayTo);
    dayTo.setDate(dayTo.getDate() + 1);
    dayTo.setMinutes(dayTo.getMinutes() - 1);
    result.dayTo = dayTo.getTime();
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
