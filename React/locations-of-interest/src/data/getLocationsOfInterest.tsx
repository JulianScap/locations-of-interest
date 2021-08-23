import Constants from "../tools/Constants";
import ILocation from "../types/ILocation";
import data from "./locations-of-interest.json";

export function getLocationsOfInterest(): ILocation[] {
  let i = 1;

  return data.map((element: any) => {
    let result: ILocation = {
      ...element,
      day: new Date(element.day),
      updated: new Date(element.updated),
      id: i++,
    };

    result.search = [
      result.city,
      result.locationName,
      result.postCode,
      result.streetAddress,
      result.suburb,
    ]
      .join("\n")
      .toLocaleLowerCase(Constants.locale);

    return result;
  });
}
