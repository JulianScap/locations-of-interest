import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import LocationRow from "./LocationRow";
import ILocation from "../../types/ILocation";
import React from "react";
import SortableTableCell from "../../Component/SortableTableCell";
import {
  getErrorSelector,
  getLocationsSelector,
  getPendingSelector,
} from "../../store/locations/selectors";
import { useSelector } from "react-redux";

// import Sort from "../../tools/Sort";

function LocationTable() {
  // const sortData = (e: React.MouseEvent) => {
  //   const sortProperty: string | null =
  //     e.currentTarget.getAttribute("sortproperty") || Sort.defaultSort;

  //   dispatch(applySort(sortProperty));
  // };
  const pending = useSelector(getPendingSelector);
  const locations = useSelector(getLocationsSelector);
  const error = useSelector(getErrorSelector);

  let tableRows: JSX.Element[];

  if (pending) {
    tableRows = [
      <TableRow key="1">
        <TableCell colSpan={9}>Loading...</TableCell>
      </TableRow>,
    ];
  } else if (error) {
    tableRows = [
      <TableRow key="1">
        <TableCell colSpan={9}>Error : {error}</TableCell>
      </TableRow>];
  } else {
    tableRows = locations.map((location: ILocation) => (
      <LocationRow key={location.id} location={location} />
    ));
  }

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>Maps</TableCell>
          <SortableTableCell
            // onClick={sortData}
            sortproperty="locationName"
            text="Location Name"
            // currentSort={sort}
          />
          <SortableTableCell
            // onClick={sortData}
            sortproperty="streetAddress"
            text="Street address"
            // currentSort={sort}
          />
          <SortableTableCell
            // onClick={sortData}
            sortproperty="suburb"
            text="Suburb"
            // currentSort={sort}
          />
          <SortableTableCell
            // onClick={sortData}
            sortproperty="city"
            text="City"
            // currentSort={sort}
          />
          <SortableTableCell
            // onClick={sortData}
            sortproperty="postCode"
            text="Post code"
            // currentSort={sort}
          />
          <SortableTableCell
            // onClick={sortData}
            sortproperty="day"
            text="Day"
            // currentSort={sort}
          />
          <TableCell>Times</TableCell>
          <SortableTableCell
            // onClick={sortData}
            sortproperty="updated"
            text="Updated"
            // currentSort={sort}
          />
        </TableRow>
      </TableHead>
      <TableBody>{tableRows}</TableBody>
    </Table>
  );
}

export default LocationTable;
