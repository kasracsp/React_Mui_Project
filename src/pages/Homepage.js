import React, { useEffect } from "react";
//mui
import { Box, Stack } from "@mui/material";
//components
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
//redux
import {FetchFoods} from "../redux/foods/FoodsAction";
import { setCategory } from "../redux/category/categoryAction";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import TemporaryDrawer from "../components/TemporaryDrawer";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFoods(""));
    dispatch(setCategory(""));
  }, []);

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
