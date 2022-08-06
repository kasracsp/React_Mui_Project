import React from "react";
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, Divider, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import rehypeRaw from "rehype-raw";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../redux/category/categoryAction";
import { isInFavorites } from "../helper/functions";

const FoodCard = ({ food }) => {
  const categoryState=useSelector(state=>state.categoryState)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  return (
    <Card
      sx={[
        {
          width: "80vw",
          maxWidth: "400px",
        },
        (theme) => ({
          "&:hover": {
            boxShadow: theme.shadows[5],
          },
        }),
      ]}
    >
      <CardMedia
        component="img"
        alt={food.name}
        image={food.image}
        loading="lazy"
        width="100%"
        height={200}
      />
      <CardContent>
        <Typography variant="h6" noWrap>
          {food.name}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Checkbox
          icon={<FavoriteBorderIcon color="error" />}
          checkedIcon={<FavoriteIcon color="error" />}
          checked={isInFavorites(food.id, categoryState.favorite)}
          onChange={() => dispatch(addFavorite(food))}
        />
        <Button variant="text" onClick={() => navigate(`/recipe/${food.id}`)}>
          More...
        </Button>
      </CardActions>
    </Card>
  );
};

export default FoodCard;
