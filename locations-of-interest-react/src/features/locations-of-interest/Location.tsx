import { FormControl, InputLabel } from "@material-ui/core";
import LocationsFilter from "./LocationsFilter";
import LocationTable from "./LocationTable";
import GitHubIcon from "@material-ui/icons/GitHub";
import { selectVisibleLocations } from "./locationsSlice";
import { useAppSelector } from "../../app/hooks";

function Location() {
  const locations = useAppSelector(selectVisibleLocations);

  return (
    <>
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
    </>
  );
}

export default Location;
