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
import Sort from "../../tools/Sort";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { applySort, selectSort, selectVisibleLocations } from "./locationsSlice";

function LocationTable() {
  const dispatch = useAppDispatch();
  const sort = useAppSelector(selectSort);
  const locations = useAppSelector(selectVisibleLocations);
  console.log("sort", sort);
  console.log("locations", locations);

  const sortData = (e: React.MouseEvent) => {
    const sortProperty: string | null =
      e.currentTarget.getAttribute("sortproperty") || Sort.defaultSort;

    dispatch(applySort(sortProperty));
  };

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>Maps</TableCell>
          <SortableTableCell
            onClick={sortData}
            sortproperty="locationName"
            text="Location Name"
            currentSort={sort}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="streetAddress"
            text="Street address"
            currentSort={sort}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="suburb"
            text="Suburb"
            currentSort={sort}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="city"
            text="City"
            currentSort={sort}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="postCode"
            text="Post code"
            currentSort={sort}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="day"
            text="Day"
            currentSort={sort}
          />
          <TableCell>Times</TableCell>
          <SortableTableCell
            onClick={sortData}
            sortproperty="updated"
            text="Updated"
            currentSort={sort}
          />
        </TableRow>
      </TableHead>
      <TableBody>
        {(locations || []).map((location: ILocation) => (
          <LocationRow key={location.id} location={location} />
        ))}
      </TableBody>
    </Table>
  );
}

export default LocationTable;
