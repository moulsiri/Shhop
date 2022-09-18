import {useState} from 'react'
import css from '../styles/Elements.module.scss';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider} from '@mui/material/styles';

import {getProductsAsync} from '../../../asyncActions/productAction';
import {useSelector,useDispatch} from 'react-redux'
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#E26849',
    },
  },
});

const HomeElements = () => {
  const {products,resultPerPage,productsCount,filteredProductsCount,loading}=useSelector((store)=>store.products)
    const [currentPage,setCurrentPage]=useState(1);
    const [range, setRange] = useState([0, 25000]);
    const [categories,setCategories]=useState(["All","Footware","Cloths","Electronics","Groceries","Decoration"])
    const [category,setCategory]=useState(null);
    const dispatch=useDispatch();
    const handleRange = (event, newValue) => {
      setRange(newValue);
    };

    const setCurrentPageNo=(e,page)=>{
        setCurrentPage(page);
    }
    useEffect((e)=>{
    dispatch(getProductsAsync(currentPage,range,category));
    },[currentPage,range,category])
  return (
    <>
    <div className={css.blank}></div>
    <div className={css.SidePanel}>
 
    <div className={css.Filter}>
    <h3 className={css.eHeading}>Price Range</h3>
    <ThemeProvider theme={theme}>
        <Box width={200}>
    <Slider
        size={"small"}
        getAriaLabel={() => 'Price Range'}
        value={range}
        min={0}
        max={25000}
        onChange={handleRange}
        valueLabelDisplay="auto"
      />
    </Box> 
    </ThemeProvider>
   
    <h3 className={css.eHeading}>Categories</h3>
    {
        categories.map((e,i)=>{
            return <p key={i} className={css.Ctg} onClick={()=>{(e!=='All')?setCategory(e):setCategory(null)}}>{e}</p>
        })
    }
    
    </div>
   {(productsCount)?
    <div className={css.Pagination}>
        <ThemeProvider theme={theme}>
        <Pagination 
            count={Math.ceil(productsCount/resultPerPage)} 
            size="small" 
            color="primary"
            onChange={setCurrentPageNo}
            page={currentPage}
          
            
            />
        </ThemeProvider>
   
    </div>
    :" "
   }
    

 
    </div>
    
    </>
  )
}

export default HomeElements