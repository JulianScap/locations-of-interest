import Constants from "../../tools/Constants";
import ILocation from "../../types/ILocation";

const url: string =
  "https://raw.githubusercontent.com/JulianScap/locations-of-interest/main/json/locations-of-interest.json";

let locationsGlobal: ILocation[] | undefined;
let status: "idle" | "busy" | "ready" = "idle";

export async function getLocationsOfInterest(): Promise<ILocation[]> {
  if (locationsGlobal || status === "busy" || status === "ready") {
    return locationsGlobal || [];
  }
  status = "busy";

  let i = 1;

  const locations = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
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
    });

  locationsGlobal = locations;
  status = "ready";
  return locations || [];
}
