import { TableCell } from "@material-ui/core";
import { PureComponent } from "react";
import ILocation from "../types/ILocation";
import StyledTableRow from "./StyledTableRow";

interface LocationRowProps {
  location: ILocation;
}

interface LocationRowState {
  location: ILocation;
}

class LocationRow extends PureComponent<LocationRowProps, LocationRowState> {
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
      <StyledTableRow>
        <TableCell>
          <span title={this.state.location.whatToDo}>
            {this.state.location.locationName}
          </span>
        </TableCell>
        <TableCell>{this.state.location.streetAddress}</TableCell>
        <TableCell>{this.state.location.suburb}</TableCell>
        <TableCell>
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://www.google.co.nz/maps?hl=en&q=" +
              encodeURIComponent(this.state.location.address)
            }
          >
            {this.state.location.city}
          </a>
        </TableCell>
        <TableCell>{this.state.location.postCode}</TableCell>
        <TableCell>{this.state.location.dayAsString}</TableCell>
        <TableCell>{this.state.location.times}</TableCell>
        <TableCell>{this.state.location.updatedAsString}</TableCell>
      </StyledTableRow>
    );
  }
}

export default LocationRow;
