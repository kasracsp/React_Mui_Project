import React from "react";
import { Box } from "@mui/material";
import CategoryList from "./CategoryList";

const Sidebar = () => {
  return (
    <Box flex={1} sx={{ display: { xs: "none", lg: "block" } }}>
      <Box sx={{ position: "fixed" }}>
        <CategoryList />
      </Box>
    </Box>
  );
};

export default Sidebar;
