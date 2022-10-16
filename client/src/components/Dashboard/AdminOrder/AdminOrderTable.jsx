import {useState,useEffect} from 'react';

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


const AdminOrderTable = ({rows}) => {
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="right">Order Id</StyledTableCell>
          <StyledTableCell align="right">Order Recieving Date</StyledTableCell>
          <StyledTableCell align="right">Quantity</StyledTableCell>
          <StyledTableCell align="right">Order Status</StyledTableCell>
          <StyledTableCell align="right">Total Amount</StyledTableCell>
          <StyledTableCell align="right">Shipping Info</StyledTableCell>

        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,i) => (
          <StyledTableRow key={row.id}>
             <StyledTableCell component="th" scope="row">{i+1}</StyledTableCell>
            <StyledTableCell align="right" >
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            <StyledTableCell align="right">{row.Qty}</StyledTableCell>
            <StyledTableCell align="right">{row.orderStatus}</StyledTableCell>  
            <StyledTableCell align="right">{row.totalPrice}</StyledTableCell>
            <StyledTableCell align="right">{row.shippingInfo.address} {row.shippingInfo.city},{row.shippingInfo.state},{row.shippingInfo.pinCode}</StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AdminOrderTable