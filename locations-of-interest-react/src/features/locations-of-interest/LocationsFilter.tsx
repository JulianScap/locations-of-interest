// import { TextField } from "@material-ui/core";
// import { Autocomplete, AutocompleteRenderInputParams } from "@material-ui/lab";
// import { useEffect } from "react";
// import { useState } from "react";
// import {
//   applySuburb,
//   filterDayFrom,
//   filterDayTo,
//   filterUpdatedDate,
//   selectSuburbs,
//   filterText,
// } from "./locationsSlice";

// function LocationsFilter() {
//   const suburbs = useAppSelector(selectSuburbs);
//   const dispatch = useAppDispatch();
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     const timeOutId = setTimeout(() => {
//       dispatch(filterText(search));
//     }, 500);
//     return () => clearTimeout(timeOutId);
//   }, [search, dispatch]);

//   return (
//     <React.Fragment>
//       <TextField
//         label="Search"
//         variant="outlined"
//         style={{ flex: 1 }}
//         onChange={(e) => setSearch(e.currentTarget.value)}
//       />
//       &nbsp;
//       <TextField
//         InputLabelProps={{ shrink: true }}
//         label="Day from"
//         variant="outlined"
//         type="Date"
//         style={{ flex: 1 }}
//         onChange={(e) => dispatch(filterDayFrom(e.currentTarget.value))}
//       />
//       &nbsp;
//       <TextField
//         InputLabelProps={{ shrink: true }}
//         label="Day to"
//         variant="outlined"
//         type="Date"
//         style={{ flex: 1 }}
//         onChange={(e) => dispatch(filterDayTo(e.currentTarget.value))}
//       />
//       &nbsp;
//       <TextField
//         InputLabelProps={{ shrink: true }}
//         label="Updated date"
//         variant="outlined"
//         type="Date"
//         style={{ flex: 1 }}
//         onChange={(e) => dispatch(filterUpdatedDate(e.currentTarget.value))}
//       />
//       &nbsp;
//       <Autocomplete
//         options={suburbs}
//         style={{ flex: 1, display: "inline-block" }}
//         renderInput={(params: AutocompleteRenderInputParams) => (
//           <TextField {...params} label="Suburb" variant="outlined" />
//         )}
//         onChange={(_, value: string | null) => {
//           dispatch(applySuburb(value || ""));
//         }}
//       />
//     </React.Fragment>
//   );
// }

// export default LocationsFilter;
export {};
