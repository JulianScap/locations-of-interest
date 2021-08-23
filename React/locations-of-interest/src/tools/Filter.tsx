import ILocation from "../types/ILocation";

function filterOne(location: ILocation, search: string) {
  return (
    location.search.indexOf(search) !== -1
  );
}

function filterList(
  locationsOfInterest: ILocation[],
  search: string
): ILocation[] {
  return [
    ...locationsOfInterest.filter((location) => filterOne(location, search)),
  ];
}

const Filter = {
  locations: filterList,
};

export default Filter;
