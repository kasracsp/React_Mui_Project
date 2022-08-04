import React from "react";
import { Box,Drawer, Divider, Typography } from "@mui/material";
import CategoryList from "./CategoryList";
import { useSelector,useDispatch } from "react-redux";
import { openDrawer } from "../redux/category/categoryAction";

const TemporaryDrawer = () => {
  const dispatch=useDispatch()
  const categoryState=useSelector(state=>state.categoryState)
  return (
    <Drawer
      anchor="left"
      open={categoryState.drawer}
      onClose={() => dispatch(openDrawer(false))}
      variant="temporary"
    >
      <Box width={280} role="presentation">
        <Typography variant="h6" sx={{ p: 2 }}>
          Categories
        </Typography>
        <Divider />
        <CategoryList />
      </Box>
    </Drawer>
  );
};

export default TemporaryDrawer;
