import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import LocationRow from "./LocationRow";
import ILocation from "../types/ILocation";
import { useState } from "react";
import SortableTableCell from "./SortableTableCell";
import { getLocationsOfInterest } from "../data/getLocationsOfInterest";
import Sort from "../tools/Sort";

function LocationTable() {
  const [currentData, setData] = useState(getLocationsOfInterest());
  const [sortBy, setSort] = useState("id");
  const [sortAsc, setSortAsc] = useState(true);

  const sortData = (e: any) => {
    const sortProperty: string = e.target.getAttribute("sortproperty");

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

  return (
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <SortableTableCell onClick={sortData} sortproperty="id">
            #
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="locationName">
            Location Name
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="streetAddress">
            Street address
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="suburb">
            Suburb
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="city">
            City
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="postCode">
            Post code
          </SortableTableCell>
          <SortableTableCell onClick={sortData} sortproperty="day">
            Day
          </SortableTableCell>
          <TableCell>Times</TableCell>
          <SortableTableCell onClick={sortData} sortproperty="updated">
            Updated
          </SortableTableCell>
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
