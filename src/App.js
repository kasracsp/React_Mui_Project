import React,{useEffect} from "react";
//mui
import { Box } from "@mui/material";
//components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
//redux
import { useDispatch } from "react-redux";

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
    </Box>
  );
}

export default App;
