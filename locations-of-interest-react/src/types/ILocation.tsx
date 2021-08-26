interface ILocation {
  id: number;
  locationName: string;
  address: string;
  streetAddress: string;
  suburb: string;
  city: string;
  postCode: string;
  dayAsString: string;
  times: string;
  whatToDo: string;
  updatedAsString: string;
  search: string;
  updated: number;
  day: number;
  [name: string]: string | number;
}

export default ILocation;
