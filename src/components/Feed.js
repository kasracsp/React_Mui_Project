import React from 'react'
import { Box, Typography } from '@mui/material'
//redux
import { useSelector } from "react-redux";

const Feed = () => {
  const foodsState=useSelector(state=>state.foodsState)
  console.log(foodsState.foods)
  return (
    <Box flex={4} bgcolor="pink" p={2}>
      {foodsState.loading?
      <Typography>loading...</Typography>:
      foodsState.error?
      <h1>{foodsState.error}Error</h1>:
        foodsState.foods.map(food=><Typography key={food.id}>{food.name}</Typography>)
    }
    </Box>
  );
}

export default Feed