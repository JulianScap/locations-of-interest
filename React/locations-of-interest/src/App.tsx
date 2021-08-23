import React, { useEffect, useState } from "react";
import LocationTable from "./Component/LocationTable";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Input } from "@material-ui/core";

function App() {
  const [search, setSearch] = useState("");
  const [updatedDate, setUpdatedDate] = useState<Date>();
  const [finishedSearch, setDisplayMessage] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => setDisplayMessage(search), 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <React.Fragment>
      <CssBaseline />
      <Input
        placeholder="Search..."
        onChange={(e) => setSearch(e.currentTarget.value)}
      />
      <Input
        placeholder="Updated date"
        type="Date"
        onChange={(e) => setUpdatedDate(new Date(e.currentTarget.value)) }
      />
      <LocationTable search={{text: finishedSearch, updatedFrom: updatedDate }} />
    </React.Fragment>
  );
}

export default App;
