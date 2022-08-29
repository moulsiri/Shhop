// import './App.css';
import { useState } from 'react';
import {Routes,Route} from "react-router-dom"; 
import './style/App.scss';
import 'remixicon/fonts/remixicon.css';
import Register from './components/Register';
import Main from './components/Main';

import Context from './Context';
// import CardContainer from './components/CardContainer';
function App() {
  const[themeFlag,setTheme]=useState(true);
  const [price,setPrice]=useState(0);

  let themeHandler=(e)=>{
    setTheme(!themeFlag);
    const root=document.documentElement;
    // root?.style.setProperty(
    //   "--border",
    //   themeFlag ? "#222" : "#fff"
    // );
    root?.style.setProperty(
      "--text",
      themeFlag ? "#fff" : "#222"
    );
    root?.style.setProperty(
      "--clr1",
      themeFlag ? "#adc178" : "#eaece6"
    );
    root?.style.setProperty(
      "--clr2",
      themeFlag ? "#fff" : "#2f3e46"
    );
    root?.style.setProperty(
      "--clr3",
      themeFlag ? "#fca311" : "#73f38f"
    );
    root?.style.setProperty(
      "--clr4",
      themeFlag ? "#eaece6" : "#354f52"
    );
    root?.style.setProperty(
      "--bg",
      themeFlag ? "#344e41" : "#fff"
    );
  }
  return (
 
      <div className="App">
        <Context value={{price,setPrice}}>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/profile" element={<Main themeFlag={themeFlag} themeHandler={themeHandler}/>}/>

    
      </Routes>

      </Context>
     
    </div>
 
    
   
     
  );
}

export default App;
