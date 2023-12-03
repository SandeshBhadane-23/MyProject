import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';
import * as React from 'react';

interface Data {
  id: number;
  clicks: any;
  conversions: any;
  cost: any;
  campaigns: string;
  revenue: any;
}

function createData(
  id: number,
  campaigns: string,
  clicks: any,
  cost: any,
  conversions: any,
  revenue: any,
): Data {
  return {
    id,
    campaigns,
    clicks,
    cost,
    conversions,
    revenue,
  };
}

const rows = [
  createData(1, 'Cosmetics', "712" , "USD 4,272", "8", "USD 16,568"),
  createData(2, 'Serums', "3,961" , "USD 27,331", "115", "USD 362,526"),
  createData(3, 'Facewash',"9,462" , "USD 76,831", "123", "USD 266,800"),
  createData(4, 'Shampoos', "439" , "USD 2,151", "5", "USD 11,029"),
  createData(5, 'Conditioners', "1,680" , "USD 3,864", "49", "USD 175,245"),
  createData(6, 'Facewash 2', "4,978" , "USD 29,370", "189", "USD 623,106"),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key,
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string },
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'campaigns',
    numeric: false,
    disablePadding: true,
    label: 'Campaigns',
  },
  {
    id: 'clicks',
    numeric: true,
    disablePadding: false,
    label: 'Clicks',
  },
  {
    id: 'cost',
    numeric: true,
    disablePadding: false,
    label: 'Cost',
  },
  {
    id: 'conversions',
    numeric: true,
    disablePadding: false,
    label: 'Conversions',
  },
  {
    id: 'revenue',
    numeric: true,
    disablePadding: false,
    label: 'Revenue',
  },
];

interface EnhancedTableProps {
  onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } =
    props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{ fontWeight: 'bold' }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
const DashBoardTable = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof Data>('campaigns');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage],
  );

  return (
    <>
          <Table
            size={'small'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row) => {
                return (
                  <TableRow
                    hover
                    tabIndex={-1}
                    key={row.id}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      padding="none"
                    >
                      {row.campaigns}
                    </TableCell>
                    <TableCell align="right" >{row.clicks}</TableCell>
                    <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>{row.cost}</TableCell>
                    <TableCell align="right">{row.conversions}</TableCell>
                    <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>{row.revenue}</TableCell>
                  </TableRow>
                );
              })}
               <TableRow>
            <TableCell component="th" scope="row" padding="none">
              Total
            </TableCell>
            <TableCell align="right">26,510</TableCell>
            <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>USD 1,43,819 </TableCell>
            <TableCell align="right">489</TableCell>
            <TableCell align="right" style={{ whiteSpace: 'nowrap' }}>USD 15,73,563</TableCell>
          </TableRow>
            </TableBody>
          </Table>
          {/* //Pagination if needed// */}

        {/* <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
    </>
  );
}

export default DashBoardTable;
