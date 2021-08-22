import React from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Input } from "@material-ui/core";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");

  return (
    <React.Fragment>
      <CssBaseline />
      <Input onChange={(e) => setSearch(e.currentTarget.value)} />
      <LocationTable search={search} />
    </React.Fragment>
  );
}

export default App;
