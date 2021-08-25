import React, { useEffect, useState } from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import ISearch from "./types/ISearch";
import ILocation from "./types/ILocation";
import { getLocationsOfInterest } from "./data/getLocationsOfInterest";
import LocationsFilter from "./Component/LocationsFilter";

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
      <LocationsFilter
        suburbs={suburbs}
        resultCount={resultCount}
        setTextSearch={setTextSearch}
        setSuburbSearch={(value) => setSearch((s) => ({ ...s, suburb: value || "" }))}
        setDaySearch={setDaySearch}
        setDateSearch={setDateSearch}
      />
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
