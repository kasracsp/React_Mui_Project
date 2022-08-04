import React,{useEffect} from "react";
//mui
import { Box } from "@mui/material";
//components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Recipe from "./pages/Recipe";
//redux
import { useDispatch } from "react-redux";
//router-dom
import { Routes,Route,Navigate } from "react-router-dom";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/*' element={<Navigate to='/'/>} />

      </Routes>
    </Box>
  );
}

export default App;
