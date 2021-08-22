import { TableCell, TableCellProps } from "@material-ui/core";

export interface SortableTableCellProps extends TableCellProps {
  sortproperty: string;
}

function SortableTableCell(props: SortableTableCellProps) {
  const newProps: TableCellProps = { ...props };
  return <TableCell {...newProps} />;
}

export default SortableTableCell;
