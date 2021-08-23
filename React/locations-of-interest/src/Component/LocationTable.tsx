import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import LocationRow from "./LocationRow";
import ILocation from "../types/ILocation";
import React, { useState, useEffect } from "react";
import SortableTableCell from "./SortableTableCell";
import { getLocationsOfInterest } from "../data/getLocationsOfInterest";
import Sort from "../tools/Sort";
import ISearchable from "../types/ISearchable";
import Filter from "../tools/Filter";

function LocationTable(props: ISearchable) {
  const [locationsOfInterest, setLocationsOfInterest] = useState<ILocation[]>(
    []
  );

  useEffect(() => {
    async function fetchData() {
      const response = await getLocationsOfInterest();
      setLocationsOfInterest(response);
    }
    fetchData();
  }, []);

  const [currentData, setData] = useState(locationsOfInterest);
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

  const filtered = Filter.locations(locationsOfInterest, props.search);

  if (filtered.length !== currentData.length) {
    setData([...filtered]);
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
