import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import ILocation from "../types/ILocation";

interface LocationRowProps {
  location: ILocation;
  lineNumber: Number;
}

interface LocationRowState {
  lineNumber: Number;
  location: ILocation;
}

class LocationRow extends React.Component<LocationRowProps, LocationRowState> {
  constructor(props: LocationRowProps) {
    super(props);

    this.state = {
      lineNumber: props.lineNumber,
      location: {
        ...props.location,
      },
    };
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.state.lineNumber}</TableCell>
        <TableCell>{this.state.location.locationName}</TableCell>
        <TableCell>{this.state.location.address}</TableCell>
        <TableCell>{this.state.location.dayAsString}</TableCell>
        <TableCell>{this.state.location.times}</TableCell>
        <TableCell>{this.state.location.updatedAsString}</TableCell>
      </TableRow>
    );
  }
}

export default LocationRow;
