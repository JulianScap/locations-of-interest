import { FormControl, InputLabel, TextField } from "@material-ui/core";
import { Autocomplete, AutocompleteRenderInputParams } from "@material-ui/lab";
import GitHubIcon from "@material-ui/icons/GitHub";

interface ILocationsFilterProps {
  suburbs: string[];
  resultCount: number;

  setTextSearch: (text: string) => void;
  setSuburbSearch: (suburb: string | null) => void;
  setDaySearch: (dayAsText: string, property: string) => void;
  setDateSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function LocationsFilter(props: ILocationsFilterProps) {
  return (
    <div style={{ display: "flex" }}>
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
          props.setSuburbSearch(value)
        }}
      />
      &nbsp;
      <FormControl style={{ flex: 1, textAlign: "right" }}>
        <InputLabel>{"Count: " + props.resultCount}</InputLabel>
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
  );
}

export default LocationsFilter;
