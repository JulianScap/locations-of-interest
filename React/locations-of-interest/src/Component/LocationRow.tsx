import { TableCell } from "@material-ui/core";
import { PureComponent } from "react";
import ILocation from "../types/ILocation";
import StyledTableRow from "./StyledTableRow";
import MapIcon from "@material-ui/icons/Map";

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
          <a
            target="_blank"
            rel="noreferrer"
            href={
              "https://duckduckgo.com/?ia=web&iaxm=maps&q=" +
              encodeURIComponent(this.state.location.address)
            }
          >
            <MapIcon></MapIcon>
          </a>
        </TableCell>
        <TableCell>
          <span title={this.state.location.whatToDo}>
            {this.state.location.locationName}
          </span>
        </TableCell>
        <TableCell>{this.state.location.streetAddress}</TableCell>
        <TableCell>{this.state.location.suburb}</TableCell>
        <TableCell>{this.state.location.city}</TableCell>
        <TableCell>{this.state.location.postCode}</TableCell>
        <TableCell>{this.state.location.dayAsString}</TableCell>
        <TableCell>{this.state.location.times}</TableCell>
        <TableCell>{this.state.location.updatedAsString}</TableCell>
      </StyledTableRow>
    );
  }
}

export default LocationRow;
