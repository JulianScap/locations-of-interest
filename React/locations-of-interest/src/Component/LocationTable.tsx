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

function prepareData(data: any[]): ILocation[] {
  let i = 1;

  return data.map((element) => {
    let result: ILocation = {
      ...element,
      id: i++
    };
    return result;
  });
}

function LocationTable() {
  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Location Name</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>Day</TableCell>
          <TableCell>Times</TableCell>
          <TableCell>Updated</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {prepareData(data).map((location: ILocation) => (
          <LocationRow key={location.id} location={location} />
        ))}
      </TableBody>
    </Table>
  );
}

export default LocationTable;
