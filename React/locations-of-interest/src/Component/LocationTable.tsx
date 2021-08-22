import { Table, TableBody, TableRow, TableCell, TableHead } from "@material-ui/core";
import LocationRow from "./LocationRow";
import data from "../data/locations-of-interest.json";
import ILocation from "../types/ILocation";

function LocationTable() {
  return (
    <Table stickyHeader={true}>
      <TableHead>
      <TableRow>
        <TableCell>Location Name</TableCell>
        <TableCell>Address</TableCell>
        <TableCell>Day</TableCell>
        <TableCell>Times</TableCell>
        <TableCell>Updated</TableCell>
      </TableRow>
      </TableHead>
      <TableBody>
        {data.map((location: ILocation) => (
          <LocationRow location={location} />
        ))}
      </TableBody>
    </Table>
  );
}

export default LocationTable;
