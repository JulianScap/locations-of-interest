import React from "react";
import LocationTable from "./features/locations-of-interest/LocationTable";
import LocationsFilter from "./features/locations-of-interest/LocationsFilter";
import { FormControl } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import { InputLabel } from "@material-ui/core";
import { selectVisibleLocations } from "./features/locations-of-interest/locationsSlice";
import { useAppSelector } from "./app/hooks";

function App() {
  const locations = useAppSelector(selectVisibleLocations);

  return (
    <React.Fragment>
      <br />
      <div style={{ display: "flex" }}>
        <LocationsFilter />
        &nbsp;
        <FormControl style={{ flex: 1, textAlign: "right" }}>
          <InputLabel>{"Count: " + locations.length}</InputLabel>
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

export default App;
