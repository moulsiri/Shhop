import {useEffect} from 'react'

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#669C96',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
const AdminUserTable = ({rows}) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="right">User Id</StyledTableCell>
          <StyledTableCell align="right">Name</StyledTableCell>
          <StyledTableCell align="right">Username</StyledTableCell>
          <StyledTableCell align="right">Email</StyledTableCell>
          <StyledTableCell align="right">Role</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,i) => (
          <StyledTableRow key={row._id}>
             <StyledTableCell component="th" scope="row">{i+1}</StyledTableCell>
            <StyledTableCell align="right" >
              {row._id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.username}</StyledTableCell>
            <StyledTableCell align="right">{row.email}</StyledTableCell>  
            <StyledTableCell align="right">{row.role}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AdminUserTable