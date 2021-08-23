import React, { useEffect, useState } from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField } from "@material-ui/core";

function App() {
  const [search, setSearch] = useState("");
  const [updatedDate, setUpdatedDate] = useState<Date>();
  const [textSearch, setTextSearch] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setTextSearch(search), 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <React.Fragment>
      <CssBaseline />
      <br />
      <TextField
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Updated date"
        variant="outlined"
        type="Date"
        onChange={(e) => {
          if (e.currentTarget.value) {
            setUpdatedDate(new Date(e.currentTarget.value));
          } else {
            setUpdatedDate(undefined);
          }
        }}
      />
      <LocationTable
        search={{ text: textSearch, updatedFrom: updatedDate }}
      />
    </React.Fragment>
  );
}

export default App;
