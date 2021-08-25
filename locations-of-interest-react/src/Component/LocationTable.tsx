import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import LocationRow from "../features/locations-of-interest/LocationRow";
import ILocation from "../types/ILocation";
import React, { useState } from "react";
import SortableTableCell from "./SortableTableCell";
import Sort from "../tools/Sort";
import ILocationTableProps from "../types/ILocationTableProps";
import Filter from "../tools/Filter";

function LocationTable(props: ILocationTableProps) {
  const [currentData, setData] = useState(props.locations);
  const [sortBy, setSort] = useState(Sort.defaultSort);
  const [sortAsc, setSortAsc] = useState(true);

  const sortData = (e: React.MouseEvent) => {
    const sortProperty: string =
      e.currentTarget.getAttribute("sortproperty") || Sort.defaultSort;

    let newSort: boolean;
    if (sortBy === sortProperty) {
      newSort = !sortAsc;
    } else {
      newSort = true;
    }

    const sorted: ILocation[] = Sort.locations(
      currentData,
      newSort,
      sortProperty
    );

    setSort(sortProperty);
    setSortAsc(newSort);
    setData(sorted);
  };

  let filtered = Filter.locations(props.locations, props.search);

  if (filtered.length !== currentData.length) {
    filtered = Sort.locations(filtered, sortAsc, sortBy);
    setData([...filtered]);
    props.onCountChange(filtered.length);
  }

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>Maps</TableCell>
          <SortableTableCell
            onClick={sortData}
            sortproperty="locationName"
            text="Location Name"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="streetAddress"
            text="Street address"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="suburb"
            text="Suburb"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="city"
            text="City"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="postCode"
            text="Post code"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <SortableTableCell
            onClick={sortData}
            sortproperty="day"
            text="Day"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
          <TableCell>Times</TableCell>
          <SortableTableCell
            onClick={sortData}
            sortproperty="updated"
            text="Updated"
            currentSort={{ sortBy: sortBy, sortAsc: sortAsc }}
          />
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
