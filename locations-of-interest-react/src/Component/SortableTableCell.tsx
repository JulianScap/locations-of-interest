import { TableCell, TableCellProps } from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ISort from "../types/ISort";

export interface SortableTableCellProps extends TableCellProps {
  sortproperty: string;
  text?: string;
  currentSort?: ISort;
}

function getIcon(
  sortProperty: string,
  sort?: ISort
): JSX.Element {
  if (sortProperty !== sort?.property) {
    return <ImportExportIcon />;
  }

  if (sort?.asc) {
    return <ArrowUpwardIcon />;
  } else {
    return <ArrowDownwardIcon />;
  }
}

function SortableTableCell(props: SortableTableCellProps) {
  const { text, currentSort, ...cellProps } = props;
  const icon: JSX.Element = getIcon(
    props.sortproperty,
    currentSort
  );

  return (
    <TableCell {...cellProps}>
      {text} {icon}
    </TableCell>
  );
}

export default SortableTableCell;
