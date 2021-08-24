import React, { useEffect, useState } from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "@material-ui/core";
import ISearch from "./types/ISearch";
import ILocation from "./types/ILocation";
import { getLocationsOfInterest } from "./data/getLocationsOfInterest";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [search, setSearch] = useState<ISearch>({ text: "" });
  
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

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSearch((s) => ({ ...s, text: textSearch }));
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [textSearch]);

  const setDateSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newDate: Date | undefined;

    if (e.currentTarget.value) {
      newDate = new Date(e.currentTarget.value);
    }

    setSearch({ ...search, updatedTo: undefined, updatedFrom: newDate });
  };

  const setDaySearch = (value: string, property: string) => {
    let newDate: Date | undefined;

    if (value) {
      newDate = new Date(value);
    }

    const newSearch = { ...search, [property]: newDate };
    setSearch(newSearch);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <br />
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setTextSearch(e.currentTarget.value)}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Day from"
        variant="outlined"
        type="Date"
        onChange={(e) => setDaySearch(e.currentTarget.value, "dayFrom")}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Day to"
        variant="outlined"
        type="Date"
        onChange={(e) => setDaySearch(e.currentTarget.value, "dayTo")}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Updated date"
        variant="outlined"
        type="Date"
        onChange={setDateSearch}
      />
      <LocationTable search={search} locations={locationsOfInterest} />
    </React.Fragment>
  );
}

export default App;
