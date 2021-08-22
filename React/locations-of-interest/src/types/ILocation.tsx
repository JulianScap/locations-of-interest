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
  updated: Date;
  day: Date;
  [name: string]: any;
}

export default ILocation;
