import { TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderInputParams } from "@material-ui/lab";

interface ILocationsFilterProps {
  suburbs: string[];

  setTextSearch: (text: string) => void;
  setSuburbSearch: (suburb: string | null) => void;
  setDaySearch: (dayAsText: string, property: string) => void;
  setDateSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LocationsFilter(props: ILocationsFilterProps) {
  return (
    <>
      <TextField
        label="Search"
        variant="outlined"
        style={{ flex: 1 }}
        onChange={(e) => props.setTextSearch(e.currentTarget.value)}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Day from"
        variant="outlined"
        type="Date"
        style={{ flex: 1 }}
        onChange={(e) => props.setDaySearch(e.currentTarget.value, "dayFrom")}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Day to"
        variant="outlined"
        type="Date"
        style={{ flex: 1 }}
        onChange={(e) => props.setDaySearch(e.currentTarget.value, "dayTo")}
      />
      &nbsp;
      <TextField
        InputLabelProps={{ shrink: true }}
        label="Updated date"
        variant="outlined"
        type="Date"
        style={{ flex: 1 }}
        onChange={props.setDateSearch}
      />
      &nbsp;
      <Autocomplete
        options={props.suburbs}
        style={{ flex: 1, display: "inline-block" }}
        renderInput={(params: AutocompleteRenderInputParams) => (
          <TextField {...params} label="Suburb" variant="outlined" />
        )}
        onChange={(_, value: string | null) => {
          props.setSuburbSearch(value);
        }}
      />
    </>
  );
}

export default LocationsFilter;
