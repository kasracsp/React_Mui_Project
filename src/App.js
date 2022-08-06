import React,{useEffect} from "react";
//mui
import { Box } from "@mui/material";
//components
import Homepage from "./pages/Homepage";
import Recipe from "./pages/Recipe";
//redux
import { useDispatch } from "react-redux";
import { setFavorites } from "./redux/category/categoryAction";
//router-dom
import { Routes,Route,Navigate } from "react-router-dom";

function App() {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(setFavorites());
  },[])
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/recipe/:id' element={<Recipe />} />
        <Route path='/*' element={<Navigate to='/'/>} />
      </Routes>
    </Box>
  );
}

export default App;
