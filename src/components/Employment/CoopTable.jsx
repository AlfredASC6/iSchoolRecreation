import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'employer', label: 'Employer', minWidth: 170 },
  { id: 'term', label: 'Term', minWidth: 100 },
  {
    id: 'degree',
    label: 'Degree',
    minWidth: 170,
    //format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'city',
    label: 'City',
    minWidth: 170,
    //format: (value) => value.toLocaleString('en-US'),
  }
];

function createData(input) {
  return {input};
}


export default function CoopTable(props) {
  
  const rows = [
    // props.whichGroup.coopInformation
    createData(props.whichGroup.coopInformation)
  ]

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <h4>{props.title}</h4>

      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((term) => (
                <TableCell
                  key={term.id + "-"+ Math.random()}
                  align={term.align}
                  style={{ minWidth: term.minWidth }}
                >
                  <h4>{term.label}</h4>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
      

          <TableBody>
                {                
                rows[0].input
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                        <TableRow>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell >
                              {value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                      
                    );
                   
                  })}
              </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
