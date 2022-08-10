import React, { useEffect, useState } from "react";
import { Grid, Stack, Typography } from "@mui/material";
//redux
import { useSelector } from "react-redux";
import FoodSkeleton from "../skeleton/FoodSkeleton";
import FoodCard from "./FoodCard";
import ReactPaginate from "react-paginate";

const Feed = () => {
  const foodsState = useSelector((state) => state.foodsState);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(foodsState.foods.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(foodsState.foods.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);
  
  useEffect(() => {
    setItemOffset(0)
    const endOffset = itemsPerPage;
    setCurrentItems(foodsState.foods.slice(0, endOffset));
    setPageCount(Math.ceil(foodsState.foods.length / itemsPerPage));
  }, [foodsState]);
  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % foodsState.foods.length;
    setItemOffset(newOffset);
    window.scrollTo({
      top: 0,
    });
  };

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
    >
      <Grid container spacing={4} justifyContent="center" alignItems="start">
        {foodsState.loading ? (
          [...Array(10).keys()].map((sample) => (
            <Grid item key={sample}>
              <FoodSkeleton />
            </Grid>
          ))
        ) : foodsState.error ? (
          <Typography variant="h4" color="error">
            {foodsState.error}
          </Typography>
        ) : (
          currentItems.map((food) => (
            <Grid item key={food.id}>
              <FoodCard food={food} />
            </Grid>
          ))
        )}
      </Grid>
      {foodsState.foods.length > itemsPerPage && (
        <>
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel='<'
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="pagLink"
            previousLinkClassName="pagBtn"
            nextLinkClassName="pagBtn"
            activeLinkClassName="pagActive"
          />
        </>
      )}
    </Stack>
  );
};

export default Feed;
