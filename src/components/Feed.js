import React from "react";
import { Stack, Typography } from "@mui/material";
//redux
import { useSelector } from "react-redux";
import FoodSkeleton from "../skeleton/FoodSkeleton";
import FoodCard from "./FoodCard";

const Feed = () => {
  const foodsState = useSelector((state) => state.foodsState);
  console.log(foodsState.foods);
  return (
    <Stack
      flex={4}
      p={2}
      mt={4}
      mb={6}
      sx={{
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      spacing={5}
    >
      {foodsState.loading ? (
        [...Array(10).keys()].map((item) => <FoodSkeleton key={item} />)
      ) : foodsState.error ? (
        <Typography variant="h1" color='error'>{foodsState.error}</Typography>
      ) : (
        foodsState.foods.map((food) => (
          <FoodCard key={food.id} food={food}/>
        ))
      )}
    </Stack>
  );
};

export default Feed;
