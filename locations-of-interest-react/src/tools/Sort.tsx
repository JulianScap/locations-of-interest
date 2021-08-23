import ILocation from "../types/ILocation";
import Compare from "./Compare";

function SortLocations(
  locations: ILocation[],
  asc: boolean,
  sortProperty: string
): ILocation[] {
  if (sortProperty === "id") {
    locations.sort((a: ILocation, b: ILocation) =>
      Compare.numbers(a[sortProperty], b[sortProperty], asc)
    );
  } else if (sortProperty === "day" || sortProperty === "updated") {
    locations.sort((a: ILocation, b: ILocation) =>
      Compare.dates(a[sortProperty], b[sortProperty], asc)
    );
  } else {
    locations.sort((a: ILocation, b: ILocation) =>
      Compare.strings(a[sortProperty] as string, b[sortProperty] as string, asc)
    );
  }
  return [...locations];
}

const Sort = {
  locations: SortLocations,
  defaultSort: "id",
};

export default Sort;
