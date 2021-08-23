import { TableCell, TableCellProps } from "@material-ui/core";

import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ImportExportIcon from "@material-ui/icons/ImportExport";

export interface SortableTableCellProps extends TableCellProps {
  sortproperty: string;
  text?: string;
  currentSort: { sortBy: string; sortAsc: boolean };
}

function getIcon(
  sortProperty: string,
  sortBy: string,
  sortAsc: boolean
): JSX.Element {
  if (sortProperty !== sortBy) {
    return <ImportExportIcon />;
  }

  if (sortAsc) {
    return <ArrowUpwardIcon />;
  } else {
    return <ArrowDownwardIcon />;
  }
}

function SortableTableCell(props: SortableTableCellProps) {
  const { text, currentSort, ...cellProps } = props;
  const icon: JSX.Element = getIcon(
    props.sortproperty,
    currentSort.sortBy,
    currentSort.sortAsc
  );

  return (
    <TableCell {...cellProps}>
      {text} {icon}
    </TableCell>
  );
}

export default SortableTableCell;
