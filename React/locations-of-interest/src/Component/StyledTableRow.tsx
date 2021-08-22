import { createStyles, TableRow, Theme, withStyles } from "@material-ui/core";

const StyledTableRow = withStyles((_: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: "white",
      },
      "&:nth-of-type(even)": {
        backgroundColor: "grey",
      },
    },
  })
)(TableRow);

export default StyledTableRow;
