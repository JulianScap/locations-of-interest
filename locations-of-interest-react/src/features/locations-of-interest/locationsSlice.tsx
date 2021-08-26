import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import Filter from "../../tools/Filter";
import Sort from "../../tools/Sort";
import ILocation from "../../types/ILocation";
import ISearch from "../../types/ISearch";
import ISort from "../../types/ISort";
import { getLocationsOfInterest } from "./locationsAPI";

export interface ILocationsState {
  sort: ISort;
  allLocations: ILocation[];
  visibleLocations: ILocation[];
  suburbs: string[];
  search: ISearch;
}

const initialState: ILocationsState = {
  allLocations: [],
  visibleLocations: [],
  suburbs: [],
  search: {
    suburb: "",
    text: "",
  },
  sort: {
    property: "id",
    asc: true,
  },
};

// export const fetchLocationsAsync = createAsyncThunk(
//   "locations-of-interest/setAllLocations",
//   async () => {
//     return await getLocationsOfInterest();
//   }
// );

export async function fetchLocations(dispatch: any) {
  const response = await getLocationsOfInterest();
  dispatch({
    type: "locations-of-interest/setAllLocations",
    payload: response,
  });
}

const filterAndSort = (state: ILocationsState): ILocation[] => {
  const filtered = Filter.locations(state.allLocations, state.search);
  const sorted = Sort.locations(filtered, state.sort.asc, state.sort.property);
  return sorted;
};

const getDate = (value: string | null): Date | undefined => {
  let newDate: Date | undefined;

  if (value) {
    newDate = new Date(value);
  }

  return newDate;
};

export const locationsSlice = createSlice({
  name: "locations-of-interest",
  initialState,
  reducers: {
    setAllLocations: (state, action: PayloadAction<ILocation[]>) => {
      state.allLocations = action.payload;
      state.visibleLocations = filterAndSort(state);
    },
    applySuburb: (state, action: PayloadAction<string>) => {
      state.search.suburb = action.payload;
      state.visibleLocations = filterAndSort(state);
    },
    filterDayFrom: (state, action: PayloadAction<string>) => {
      state.search.dayFrom = getDate(action.payload);
      state.visibleLocations = filterAndSort(state);
    },
    filterDayTo: (state, action: PayloadAction<string>) => {
      state.search.dayTo = getDate(action.payload);
      state.visibleLocations = filterAndSort(state);
    },
    filterUpdatedDate: (state, action: PayloadAction<string>) => {
      state.search.updatedFrom = getDate(action.payload);
      state.visibleLocations = filterAndSort(state);
    },
    applySort: (state, action: PayloadAction<string>) => {
      let newProperty = action.payload;
      let newSort: boolean;
      if (state.sort.property === newProperty) {
        newSort = !state.sort.asc;
      } else {
        newSort = true;
      }

      state.sort = {
        asc: newSort,
        property: newProperty,
      };

      state.visibleLocations = Sort.locations(
        state.visibleLocations,
        state.sort.asc,
        state.sort.property
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchLocationsAsync.pending, (state, action) => {
  //     console.log("pending fetchLocationsAsync");
  //   });
  //   builder.addCase(fetchLocationsAsync.fulfilled, (state, action) => {
  //     console.log("fulfilled fetchLocationsAsync");
  //     state.visibleLocations = state.allLocations = action.payload;
  //     state.suburbs = state.allLocations
  //       .map((x) => x.suburb)
  //       .filter(
  //         (value, index, self) =>
  //           !!value && self.indexOf(value) === index && !value.startsWith("RD")
  //       )
  //       .sort();
  //   });
  // },
});

export const {
  applySuburb,
  applySort,
  filterUpdatedDate,
  filterDayTo,
  filterDayFrom,
} = locationsSlice.actions;

export const selectSort = (state: RootState) => state.locations.sort;
export const selectVisibleLocations = (state: RootState) =>
  state.locations.visibleLocations;
export const selectSuburbs = (state: RootState) => state.locations.suburbs;

export default locationsSlice.reducer;
