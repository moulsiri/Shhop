import {useState,useEffect} from 'react';
import './adminProduct.scss';

import {useSelector, useDispatch} from 'react-redux';
import { getProductsAsync } from '../../../asyncActions/productAction';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Skeleton from '@mui/material/Skeleton';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TablePaginationActions from './TablePaginationAction';
import AdminProductModel from './AdminProductModel';


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

const AdminProducts = () => {
  const dispatch=useDispatch();
  const {products,
         loading,
         resultPerPage,
        productsCount,
      filteredProductsCount}=useSelector((store)=>store.products);
  const [crntPage,setCrrntPage]=useState(0);
  const [isModel,setIsModel]=useState(false);
  const [modelHeading,setModelHeading]=useState("");
  const [itemNm,setItemNm]=useState('new');

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
    dispatch(getProductsAsync(crntPage));
  },[crntPage])

  const handleChangePage=(e,value)=>{
setCrrntPage(value);
  }
  return (
    <>
    <AdminProductModel open={isModel} Heading={modelHeading} setOpen={setIsModel} Item={itemNm}></AdminProductModel>
       <div id="aProduct">
      <h1>Product Lists</h1>
      <button onClick={()=>{setIsModel(true);
      setModelHeading("Create New Product");
      setItemNm('new')}}>Create</button>
    </div>
    {
      (loading
        ? <Skeleton variant="rectangular" width={500} height={300} />
        :    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 500 }} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell>Product Id</StyledTableCell>
          <StyledTableCell align="right">Product Name</StyledTableCell>
          <StyledTableCell align="right">Price</StyledTableCell>
          <StyledTableCell align="right">Old Price</StyledTableCell>
          <StyledTableCell align="right">Discount</StyledTableCell>
          <StyledTableCell align="right">Stock</StyledTableCell>
          <StyledTableCell align="right">Created At</StyledTableCell>
          <StyledTableCell align="right">Edit product</StyledTableCell>
          <StyledTableCell align="right">Remove the Product</StyledTableCell>
          {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row,i) => (
          <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
              {row.id}
            </StyledTableCell>
            {/* <StyledTableCell align="right">{row.id}</StyledTableCell> */}
            <StyledTableCell align="right">{row.name}</StyledTableCell>
            <StyledTableCell align="right">{row.price}</StyledTableCell>
            <StyledTableCell align="right">{row.oldPrice}</StyledTableCell>  
            <StyledTableCell align="right">{row.discount}</StyledTableCell>
            <StyledTableCell align="right">{row.stock}</StyledTableCell>
            <StyledTableCell align="right">{row.createdAt}</StyledTableCell>
            <StyledTableCell align="right"><i className="ri-edit-box-line adminPrductUpdate" onClick={()=>{setIsModel(true);
      setModelHeading("Update product details");
      setItemNm(i)}}></i></StyledTableCell>
            <StyledTableCell align="right"><i className="ri-delete-bin-line adminProductDelete"></i></StyledTableCell>
            {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
          </StyledTableRow>
        ))}
      </TableBody>
      <TableFooter>
      <StyledTableRow>
      <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={9}
              count={productsCount}
              rowsPerPage={resultPerPage}
              page={crntPage}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              // onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />

      </StyledTableRow>

      </TableFooter>
    </Table>
  </TableContainer>)
    }

   
    
    </>
    
  )
}

export default AdminProducts