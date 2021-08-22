import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import LocationRow from "./LocationRow";
import ILocation from "../types/ILocation";
import data from "../data/locations-of-interest.json";
import { useState } from "react";

function prepareData(data: any[]): ILocation[] {
  let i = 1;

  return data.map((element) => {
    let result: ILocation = {
      ...element,
      id: i++,
    };
    return result;
  });
}

function getSortProperty(id: string): string {
  switch (id) {
    case "headerName":
      return "locationName";
    case "headerStreetAddress":
      return "streetAddress";
  }
  return "";
}

function LocationTable() {
  const [currentData, setData] = useState(prepareData(data));
  //const [sort, setSort] = useState("id");

  const sortData = (e: any) => {
    const sortBy: string = getSortProperty(e.target.id);

    currentData.sort(function (a: ILocation, b: ILocation) {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }

      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });

    setData([...currentData]);
  };

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell onClick={sortData} id="headerName">
            Location Name
          </TableCell>
          <TableCell onClick={sortData} id="headerStreetAddress">
            Street address
          </TableCell>
          <TableCell>Suburb</TableCell>
          <TableCell>City</TableCell>
          <TableCell>Post code</TableCell>
          <TableCell>Day</TableCell>
          <TableCell>Times</TableCell>
          <TableCell>Updated</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currentData.map((location: ILocation) => (
          <LocationRow key={location.id} location={location} />
        ))}
      </TableBody>
    </Table>
  );
}

export default LocationTable;
