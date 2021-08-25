import React, { useEffect, useState } from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, InputLabel, FormControl } from "@material-ui/core";
import ISearch from "./types/ISearch";
import ILocation from "./types/ILocation";
import { getLocationsOfInterest } from "./data/getLocationsOfInterest";
import { Autocomplete, AutocompleteRenderInputParams } from "@material-ui/lab";

function App() {
  const [textSearch, setTextSearch] = useState("");
  const [search, setSearch] = useState<ISearch>({ text: "", suburb: "" });
  const [resultCount, setResultCount] = useState(0);

  const [locationsOfInterest, setLocationsOfInterest] = useState<ILocation[]>(
    []
  );

  const [suburbs, setSuburbs] = useState<string[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getLocationsOfInterest();
      setSuburbs(
        response
          .map((x) => x.suburb)
          .filter(
            (value, index, self) =>
              !!value &&
              self.indexOf(value) === index &&
              !value.startsWith("RD")
          )
          .sort()
      );
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
      <div style={{ display: "flex" }}>
        <TextField
          label="Search"
          variant="outlined"
          style={{ flex: 1 }}
          onChange={(e) => setTextSearch(e.currentTarget.value)}
        />
        &nbsp;
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Day from"
          variant="outlined"
          type="Date"
          style={{ flex: 1 }}
          onChange={(e) => setDaySearch(e.currentTarget.value, "dayFrom")}
        />
        &nbsp;
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Day to"
          variant="outlined"
          type="Date"
          style={{ flex: 1 }}
          onChange={(e) => setDaySearch(e.currentTarget.value, "dayTo")}
        />
        &nbsp;
        <TextField
          InputLabelProps={{ shrink: true }}
          label="Updated date"
          variant="outlined"
          type="Date"
          style={{ flex: 1 }}
          onChange={setDateSearch}
        />
        &nbsp;
        <Autocomplete
          options={suburbs}
          style={{ flex: 1, display: "inline-block" }}
          renderInput={(params: AutocompleteRenderInputParams) => (
            <TextField {...params} label="Suburb" variant="outlined" />
          )}
          onChange={(_, value: string | null) => {
            setSearch((s) => ({ ...s, suburb: value || "" }));
          }}
        />
        &nbsp;
        <FormControl style={{ flex: 1, textAlign: "right" }}>
          <InputLabel style={{ width: 250 }}>
            {"Count: " + resultCount}
          </InputLabel>
        </FormControl>
      </div>
      <LocationTable
        search={search}
        locations={locationsOfInterest}
        onCountChange={(count: number) => {
          setResultCount(count);
        }}
      />
    </React.Fragment>
  );
}

export default App;
