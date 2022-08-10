import React from "react";
//mui
import { Box, Stack } from "@mui/material";
//components
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
//redux
import Navbar from "../components/Navbar";
import TemporaryDrawer from "../components/TemporaryDrawer";

const Homepage = () => {
  return (
    <Box>
      <Navbar isCategoryOn={true} />
      <Stack direction="row" justifyContent="center">
        <Sidebar />
        <Feed />
      </Stack>
      <TemporaryDrawer />
    </Box>
  );
};

export default Homepage;
