import ILocation from "../types/ILocation";
import ISort from "../types/ISort";
import Compare from "./Compare";

function sortLocations(locations: ILocation[], sort: ISort): ILocation[] {
  const sortProperty: string = sort.property;
  if (sortProperty === "id" || sortProperty === "day" || sortProperty === "updated") {
    locations.sort((a: ILocation, b: ILocation) =>
      Compare.numbers(a[sortProperty], b[sortProperty], sort.asc)
    );
  } else {
    locations.sort((a: ILocation, b: ILocation) =>
      Compare.strings(
        a[sortProperty] as string,
        b[sortProperty] as string,
        sort.asc
      )
    );
  }

  return [...locations];
}

const Sort = {
  locations: sortLocations,
  defaultSort: "id",
};

export default Sort;
