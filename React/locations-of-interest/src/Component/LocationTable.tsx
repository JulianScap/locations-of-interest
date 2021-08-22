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
import SortableTableCell from "./SortableTableCell";

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

function compareStrings(a: string, b: string, asc: boolean): number {
  if (!a || a === "") {
    return 1;
  }

  let result = (a || "").localeCompare(b || "");

  if (!asc) {
    result *= -1;
  }

  return result;
}

function compareNumbers(a: number, b: number, asc: boolean): number {
  let result = a - b;

  if (!asc) {
    result *= -1;
  }

  return result;
}

function LocationTable() {
  const [currentData, setData] = useState(prepareData(data));
  const [sortBy, setSort] = useState("id");
  const [sortAsc, setSortAsc] = useState(true);

  const sortData = (e: any) => {
    const sortProperty: string = e.target.getAttribute("sortproperty");

    let newSort: boolean;
    if (sortBy === sortProperty) {
      newSort = !sortAsc;
    } else {
      newSort = true;
      setSort(sortProperty);
    }
    setSortAsc(newSort);

    if (sortProperty === "id") {
      currentData.sort((a: ILocation, b: ILocation) =>
        compareNumbers(a[sortProperty], b[sortProperty], newSort)
      );
    } else {
      currentData.sort((a: ILocation, b: ILocation) =>
        compareStrings(a[sortProperty], b[sortProperty], newSort)
      );
    }

    setData([...currentData]);
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
