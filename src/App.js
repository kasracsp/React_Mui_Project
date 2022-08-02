import React from "react";

//mui
import { Box, Stack } from "@mui/material";

//components
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Box>
      <Navbar />
      <Homepage />
    </Box>
  );
}

export default App;
