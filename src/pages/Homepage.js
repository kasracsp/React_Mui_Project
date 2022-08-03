import React, { useEffect } from 'react'
//mui
import { Stack } from '@mui/material';
//components
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
//redux
import FetchFoods from '../redux/foods/FoodsAction';
import { useDispatch } from "react-redux";

const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchFoods(""));
  }, []);

  return (
    <Stack direction="row" justifyContent="center">
      <Sidebar />
      <Feed />
    </Stack>
  );
}

export default Homepage