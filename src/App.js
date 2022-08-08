import React, { useEffect, useState } from "react";
//mui
import { Box, colors, createTheme, ThemeProvider } from "@mui/material";
//components
import Homepage from "./pages/Homepage";
import Recipe from "./pages/Recipe";
//redux
import { useDispatch,useSelector } from "react-redux";
import { setFavorites } from "./redux/category/categoryAction";
//router-dom
import { Routes, Route, Navigate } from "react-router-dom";
import ContactUs from "./pages/ContactUs";



function App() {
  const dispatch = useDispatch();
  const modeState=useSelector(state=>state.modeState)
  const theme = createTheme({
    palette: {
      primary: {
        main: colors.pink[500],
      },
      mode: modeState.mode,
    },
  });
  useEffect(() => {
    dispatch(setFavorites());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{backgroundColor:'background.default',color:'text.primary',minHeight:'100vh'}}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
