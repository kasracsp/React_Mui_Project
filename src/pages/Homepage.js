import React from 'react'
import { Stack } from '@mui/material';
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";

const Homepage = () => {
  return (
    <Stack direction="row" justifyContent="center">
      <Sidebar />
      <Feed />
    </Stack>
  );
}

export default Homepage