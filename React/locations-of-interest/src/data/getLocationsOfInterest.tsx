import ILocation from "../types/ILocation";
import data from "./locations-of-interest.json";

export function getLocationsOfInterest(): ILocation[] {
  let i = 1;

  return data.map((element:any) => {
    let result: ILocation = {
      ...element,
      day: new Date(element.day),
      updated: new Date(element.updated),
      id: i++,
    };
    return result;
  });
}
