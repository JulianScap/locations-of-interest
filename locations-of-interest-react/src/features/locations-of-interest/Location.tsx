import { FormControl } from "@material-ui/core";
import LocationTable from "./LocationTable";
import GitHubIcon from "@material-ui/icons/GitHub";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLocationsRequest } from "../../store/locations/actions";

function Location() {
  // const locations = useAppSelector(selectVisibleLocations);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchLocationsRequest());
  }, [dispatch]);

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        {/* <LocationsFilter /> */}
        &nbsp;
        <FormControl style={{ flex: 1, textAlign: "right" }}>
          {/* <InputLabel>{"Count: " + locations.length}</InputLabel> */}
        </FormControl>
        &nbsp;
        <a
          href="https://github.com/JulianScap/locations-of-interest"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon />
        </a>
      </div>
      <LocationTable />
    </React.Fragment>
  );
}

export default Location;
