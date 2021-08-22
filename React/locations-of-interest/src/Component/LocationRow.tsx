import { TableCell, TableRow } from "@material-ui/core";
import React from "react";
import ILocation from "../types/ILocation";

interface LocationRowProps {
  location: ILocation;
}

interface LocationRowState {
  location: ILocation;
}

class LocationRow extends React.Component<LocationRowProps, LocationRowState> {
  constructor(props: LocationRowProps) {
    super(props);

    this.state = {
      location: {
        ...props.location,
      },
    };
  }

  render() {
    return (
      <TableRow>
        <TableCell>{this.state.location.id}</TableCell>
        <TableCell><span title={this.state.location.whatToDo}>{this.state.location.locationName}</span></TableCell>
        <TableCell>{this.state.location.streetAddress}</TableCell>
        <TableCell>{this.state.location.suburb}</TableCell>
        <TableCell>{this.state.location.city}</TableCell>
        <TableCell>{this.state.location.postCode}</TableCell>
        <TableCell>{this.state.location.dayAsString}</TableCell>
        <TableCell>{this.state.location.times}</TableCell>
        <TableCell>{this.state.location.updatedAsString}</TableCell>
      </TableRow>
    );
  }
}

export default LocationRow;
