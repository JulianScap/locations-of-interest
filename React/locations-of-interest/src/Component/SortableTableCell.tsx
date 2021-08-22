import { TableCell, TableCellProps } from "@material-ui/core";

export interface SortableTableCellProps extends TableCellProps {
  sortproperty: string;
}

function SortableTableCell(props: SortableTableCellProps) {
  return <TableCell {...props} />;
}

export default SortableTableCell;
