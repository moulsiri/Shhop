import {useState,useEffect} from 'react';
import './adminProduct.scss';

import {useSelector, useDispatch} from 'react-redux';
import { getAdminProductAsync } from '../../../asyncActions/admin/adminProductAction';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';

import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

// import AdminProductModel from './AdminProductModel';


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

function createData(
  id,
  name,
  ctg,
  price,
  oldPrice,
  discount,
  stock,
  createdAt

) {
  return {id,
    name,
    ctg,
    price,
    oldPrice,
    discount,
    stock,
    createdAt };
}
const linkStyle={
  textDecoration:'none'
}

const AdminProducts = () => {
  const dispatch=useDispatch();
  const {products,
    loading,
   productsCount}=useSelector((store)=>store.adminProducts);


  let rows=[]
  if(!loading){
    rows=products.map((elm)=>createData(
      elm._id,
      elm.name,
      elm.category,
      elm.price,
      elm.oldPrice,
      elm.discount,
      elm.Stock,
      elm.createdAt
      ))
    // console.log(rows)
  }
  useEffect((e)=>{
    dispatch(getAdminProductAsync());
  },[])


  return (
    <>
    <Outlet></Outlet>
    {/* <AdminProductModel open={isModel} Heading={modelHeading} setOpen={setIsModel} Item={itemNm}></AdminProductModel> */}
       <div id="aProduct">
      <h1>Product Lists</h1>
      <Link to="new"  style={linkStyle}><button>Create</button></Link>
    </div>
    {
      (loading
        ? <Skeleton variant="rectangular" width={500} height={300} />
        :    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow>
        <StyledTableCell>#</StyledTableCell>
          <StyledTableCell align="right">Product Id</StyledTableCell>
          <StyledTableCell align="right">Product Name</StyledTableCell>
          <StyledTableCell align="right">Price</StyledTableCell>
          <StyledTableCell align="right">Old Price</StyledTableCell>
          <StyledTableCell align="right">Discount(%)</StyledTableCell>
          <StyledTableCell align="right">Stock</StyledTableCell>
          <StyledTableCell align="right">Created At</StyledTableCell>
          <StyledTableCell align="right">Edit product</StyledTableCell>
          <StyledTableCell align="right">Remove the Product</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,i) => (
          <StyledTableRow key={row.id}>
             <StyledTableCell component="th" scope="row">{i+1}</StyledTableCell>
            <StyledTableCell align="right" >
              {row.id}
            </StyledTableCell>
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.price}</StyledTableCell>
            <StyledTableCell align="right">{row.oldPrice}</StyledTableCell>  
            <StyledTableCell align="right">{row.discount}</StyledTableCell>
            <StyledTableCell align="right">{row.stock}</StyledTableCell>
            <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            <StyledTableCell align="right"><Link to={`${row.id}`} style={linkStyle}><i className="ri-edit-box-line adminPrductUpdate"></i></Link> </StyledTableCell>
            <StyledTableCell align="right"><i className="ri-delete-bin-line adminProductDelete"></i></StyledTableCell>
          </StyledTableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>)
    }

   
    
    </>
    
  )
}

export default AdminProducts