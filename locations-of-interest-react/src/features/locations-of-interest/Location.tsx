import { FormControl, InputLabel } from "@material-ui/core";
import LocationsFilter from "./LocationsFilter";
import LocationTable from "./LocationTable";
import GitHubIcon from "@material-ui/icons/GitHub";
import { fetchLocationsAsync, selectVisibleLocations } from "./locationsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useEffect } from "react";

function Location() {
  const locations = useAppSelector(selectVisibleLocations);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      dispatch(fetchLocationsAsync());
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [dispatch]);

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
